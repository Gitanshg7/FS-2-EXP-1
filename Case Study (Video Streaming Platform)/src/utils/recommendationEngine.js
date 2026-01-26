// Client-side recommendation engine

/**
 * Generates personalized video recommendations based on watch history
 * @param {Array} watchHistory - Array of watched videos
 * @param {Array} allVideos - Complete video database
 * @param {number} currentVideoId - ID of current video (to exclude)
 * @param {number} count - Number of recommendations to return
 * @returns {Array} Array of recommended videos
 */
export const getRecommendations = (watchHistory, allVideos, currentVideoId = null, count = 10) => {
    if (!watchHistory || watchHistory.length === 0) {
        // No history: return random trending videos
        return getRandomVideos(allVideos, currentVideoId, count);
    }

    // Calculate category preferences based on watch history
    const categoryScores = getCategoryPreferences(watchHistory);

    // Filter out current video
    let availableVideos = currentVideoId
        ? allVideos.filter(v => v.id !== currentVideoId)
        : allVideos;

    // Filter out recently watched videos (last 10)
    const recentlyWatchedIds = watchHistory.slice(0, 10).map(v => v.id);
    availableVideos = availableVideos.filter(v => !recentlyWatchedIds.includes(v.id));

    // Score each video based on multiple factors
    const scoredVideos = availableVideos.map(video => ({
        ...video,
        score: calculateVideoScore(video, categoryScores, watchHistory)
    }));

    // Sort by score (descending)
    scoredVideos.sort((a, b) => b.score - a.score);

    // Add some randomness to top recommendations to avoid repetition
    const topCandidates = scoredVideos.slice(0, count * 2);
    const shuffledTop = shuffleArray(topCandidates);

    return shuffledTop.slice(0, count);
};

/**
 * Calculate category preferences based on watch history
 * @param {Array} watchHistory - Array of watched videos
 * @returns {Object} Category scores
 */
const getCategoryPreferences = (watchHistory) => {
    const categoryCounts = {};
    const totalVideos = Math.min(watchHistory.length, 20); // Consider last 20 videos

    watchHistory.slice(0, totalVideos).forEach((video, index) => {
        const category = video.category;
        const recencyWeight = 1 - (index / totalVideos) * 0.5; // More recent = higher weight

        categoryCounts[category] = (categoryCounts[category] || 0) + recencyWeight;
    });

    // Normalize scores
    const maxCount = Math.max(...Object.values(categoryCounts), 1);
    const normalizedScores = {};

    Object.keys(categoryCounts).forEach(category => {
        normalizedScores[category] = categoryCounts[category] / maxCount;
    });

    return normalizedScores;
};

/**
 * Calculate recommendation score for a video
 * @param {Object} video - Video object
 * @param {Object} categoryScores - Category preference scores
 * @param {Array} watchHistory - Watch history
 * @returns {number} Score
 */
const calculateVideoScore = (video, categoryScores, watchHistory) => {
    let score = 0;

    // Category match score (0-10)
    const categoryScore = (categoryScores[video.category] || 0.1) * 10;
    score += categoryScore;

    // Popularity score based on views (0-5)
    const viewCount = parseFloat(video.views.replace('M', '')) * 1000000;
    const popularityScore = Math.min((viewCount / 10000000) * 5, 5);
    score += popularityScore;

    // Recency score - newer videos get slight boost (0-3)
    const uploadDate = new Date(video.uploadDate);
    const daysSinceUpload = (new Date() - uploadDate) / (1000 * 60 * 60 * 24);
    const recencyScore = Math.max(3 - (daysSinceUpload / 3), 0);
    score += recencyScore;

    // Channel familiarity - have we watched this channel before? (0-5)
    const watchedFromChannel = watchHistory.some(v => v.channel.name === video.channel.name);
    if (watchedFromChannel) {
        score += 5;
    }

    // Add small random factor for variety (0-2)
    score += Math.random() * 2;

    return score;
};

/**
 * Get random videos when no history exists
 * @param {Array} allVideos - All available videos
 * @param {number} excludeId - Video ID to exclude
 * @param {number} count - Number of videos to return
 * @returns {Array} Random videos
 */
const getRandomVideos = (allVideos, excludeId, count) => {
    let videos = excludeId
        ? allVideos.filter(v => v.id !== excludeId)
        : [...allVideos];

    return shuffleArray(videos).slice(0, count);
};

/**
 * Shuffle array using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

/**
 * Get videos to continue watching (with saved playback positions)
 * @param {Array} watchHistory - Watch history
 * @param {Object} playbackPositions - Saved playback positions
 * @returns {Array} Videos to continue watching
 */
export const getContinueWatchingVideos = (watchHistory, playbackPositions) => {
    if (!watchHistory || !playbackPositions) return [];

    const continueWatching = watchHistory
        .filter(video => {
            const position = playbackPositions[video.id];
            if (!position) return false;

            // Only include if watched between 10% and 90% of the video
            const progress = position.position / position.duration;
            return progress >= 0.1 && progress <= 0.9;
        })
        .slice(0, 8); // Limit to 8 videos

    return continueWatching.map(video => ({
        ...video,
        playbackPosition: playbackPositions[video.id].position,
        duration: playbackPositions[video.id].duration,
        progress: (playbackPositions[video.id].position / playbackPositions[video.id].duration) * 100
    }));
};
