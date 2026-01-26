import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockVideos } from '../data/mockData';
import {
    getWatchHistory,
    addToWatchHistory,
    getAllPlaybackPositions,
    savePlaybackPosition,
    getPreferences,
    savePreference
} from '../utils/storageUtils';
import {
    getRecommendations,
    getContinueWatchingVideos
} from '../utils/recommendationEngine';

const AppContext = createContext();

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within AppProvider');
    }
    return context;
};

export const AppProvider = ({ children }) => {
    const [watchHistory, setWatchHistory] = useState([]);
    const [playbackPositions, setPlaybackPositions] = useState({});
    const [preferences, setPreferences] = useState({
        volume: 1,
        playbackSpeed: 1,
        autoplay: false,
        theaterMode: false
    });
    const [searchQuery, setSearchQuery] = useState('');

    // Load data from localStorage on mount
    useEffect(() => {
        setWatchHistory(getWatchHistory());
        setPlaybackPositions(getAllPlaybackPositions());
        setPreferences(getPreferences());
    }, []);

    // Add video to watch history
    const addVideoToHistory = (video) => {
        const updatedHistory = addToWatchHistory(video);
        setWatchHistory(updatedHistory);
    };

    // Update playback position
    const updatePlaybackPosition = (videoId, position, duration) => {
        savePlaybackPosition(videoId, position, duration);
        setPlaybackPositions(getAllPlaybackPositions());
    };

    // Update user preference
    const updatePreference = (key, value) => {
        const updatedPrefs = savePreference(key, value);
        setPreferences(updatedPrefs);
    };

    // Get recommended videos
    const getRecommendedVideos = (currentVideoId = null, count = 10) => {
        return getRecommendations(watchHistory, mockVideos, currentVideoId, count);
    };

    // Get continue watching videos
    const getContinueWatching = () => {
        return getContinueWatchingVideos(watchHistory, playbackPositions);
    };

    // Search videos
    const searchVideos = (query) => {
        if (!query || query.trim() === '') return mockVideos;

        const lowerQuery = query.toLowerCase();
        return mockVideos.filter(video =>
            video.title.toLowerCase().includes(lowerQuery) ||
            video.description.toLowerCase().includes(lowerQuery) ||
            video.channel.name.toLowerCase().includes(lowerQuery) ||
            video.category.toLowerCase().includes(lowerQuery)
        );
    };

    const value = {
        watchHistory,
        playbackPositions,
        preferences,
        searchQuery,
        setSearchQuery,
        addVideoToHistory,
        updatePlaybackPosition,
        updatePreference,
        getRecommendedVideos,
        getContinueWatching,
        searchVideos
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
