// LocalStorage utility functions for watch history and user preferences

const STORAGE_KEYS = {
    WATCH_HISTORY: 'videoStreamingApp_watchHistory',
    PLAYBACK_POSITIONS: 'videoStreamingApp_playbackPositions',
    PREFERENCES: 'videoStreamingApp_preferences'
};

// Watch History Functions
export const getWatchHistory = () => {
    try {
        const history = localStorage.getItem(STORAGE_KEYS.WATCH_HISTORY);
        return history ? JSON.parse(history) : [];
    } catch (error) {
        console.error('Error reading watch history:', error);
        return [];
    }
};

export const addToWatchHistory = (video) => {
    try {
        const history = getWatchHistory();

        // Remove existing entry if present
        const filteredHistory = history.filter(v => v.id !== video.id);

        // Add to beginning of array with timestamp
        const newEntry = {
            ...video,
            watchedAt: new Date().toISOString()
        };

        filteredHistory.unshift(newEntry);

        // Keep only last 50 videos
        const limitedHistory = filteredHistory.slice(0, 50);

        localStorage.setItem(STORAGE_KEYS.WATCH_HISTORY, JSON.stringify(limitedHistory));
        return limitedHistory;
    } catch (error) {
        console.error('Error adding to watch history:', error);
        return [];
    }
};

export const clearWatchHistory = () => {
    try {
        localStorage.removeItem(STORAGE_KEYS.WATCH_HISTORY);
    } catch (error) {
        console.error('Error clearing watch history:', error);
    }
};

// Playback Position Functions
export const getPlaybackPosition = (videoId) => {
    try {
        const positions = localStorage.getItem(STORAGE_KEYS.PLAYBACK_POSITIONS);
        const positionsObj = positions ? JSON.parse(positions) : {};
        return positionsObj[videoId] || 0;
    } catch (error) {
        console.error('Error reading playback position:', error);
        return 0;
    }
};

export const savePlaybackPosition = (videoId, position, duration) => {
    try {
        const positions = localStorage.getItem(STORAGE_KEYS.PLAYBACK_POSITIONS);
        const positionsObj = positions ? JSON.parse(positions) : {};

        // Only save if not at the very beginning or very end
        if (position > 5 && position < duration - 10) {
            positionsObj[videoId] = {
                position,
                duration,
                timestamp: new Date().toISOString()
            };
        } else if (position >= duration - 10) {
            // Remove position if video is basically finished
            delete positionsObj[videoId];
        }

        localStorage.setItem(STORAGE_KEYS.PLAYBACK_POSITIONS, JSON.stringify(positionsObj));
    } catch (error) {
        console.error('Error saving playback position:', error);
    }
};

export const getAllPlaybackPositions = () => {
    try {
        const positions = localStorage.getItem(STORAGE_KEYS.PLAYBACK_POSITIONS);
        return positions ? JSON.parse(positions) : {};
    } catch (error) {
        console.error('Error reading all playback positions:', error);
        return {};
    }
};

export const clearPlaybackPosition = (videoId) => {
    try {
        const positions = localStorage.getItem(STORAGE_KEYS.PLAYBACK_POSITIONS);
        const positionsObj = positions ? JSON.parse(positions) : {};
        delete positionsObj[videoId];
        localStorage.setItem(STORAGE_KEYS.PLAYBACK_POSITIONS, JSON.stringify(positionsObj));
    } catch (error) {
        console.error('Error clearing playback position:', error);
    }
};

// User Preferences Functions
export const getPreferences = () => {
    try {
        const prefs = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
        return prefs ? JSON.parse(prefs) : {
            volume: 1,
            playbackSpeed: 1,
            autoplay: false,
            theaterMode: false
        };
    } catch (error) {
        console.error('Error reading preferences:', error);
        return {
            volume: 1,
            playbackSpeed: 1,
            autoplay: false,
            theaterMode: false
        };
    }
};

export const savePreference = (key, value) => {
    try {
        const prefs = getPreferences();
        prefs[key] = value;
        localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(prefs));
        return prefs;
    } catch (error) {
        console.error('Error saving preference:', error);
        return getPreferences();
    }
};

export const resetPreferences = () => {
    try {
        localStorage.removeItem(STORAGE_KEYS.PREFERENCES);
    } catch (error) {
        console.error('Error resetting preferences:', error);
    }
};
