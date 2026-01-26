import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Box, Typography, Avatar, Button, Divider } from '@mui/material';
import { getVideoById } from '../../data/mockData';
import { useApp } from '../../context/AppContext';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoCarousel from '../../components/HomePage/VideoCarousel';
import './Watch.css';

const Watch = () => {
    const { videoId } = useParams();
    const navigate = useNavigate();
    const { addVideoToHistory, getRecommendedVideos } = useApp();
    const [video, setVideo] = useState(null);
    const [theaterMode, setTheaterMode] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);

    useEffect(() => {
        const fetchedVideo = getVideoById(videoId);
        if (fetchedVideo) {
            setVideo(fetchedVideo);
            addVideoToHistory(fetchedVideo);
        } else {
            navigate('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoId, navigate]);

    // Memoize recommendations to prevent infinite loop
    // Must be before early return to follow Rules of Hooks
    const recommendedVideos = useMemo(() => {
        if (!videoId) return [];
        return getRecommendedVideos(parseInt(videoId), 12);
    }, [videoId, getRecommendedVideos]);

    if (!video) {
        return null;
    }

    return (
        <Box className={`watch-page ${theaterMode ? 'theater-mode' : ''}`}>
            <Container
                maxWidth={theaterMode ? 'xl' : 'lg'}
                sx={{ py: 0 }}
            >
                <VideoPlayer
                    video={video}
                    theaterMode={theaterMode}
                    onTheaterModeToggle={() => setTheaterMode(!theaterMode)}
                />
            </Container>

            <Container maxWidth="lg" sx={{ py: 3 }}>
                <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', lg: 'row' } }}>
                    {/* Main content */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                            {video.title}
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Avatar
                                src={video.channel.avatar}
                                alt={video.channel.name}
                                sx={{ width: 48, height: 48 }}
                            />
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    {video.channel.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#aaa' }}>
                                    {video.channel.subscribers} subscribers
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 2, bgcolor: 'rgba(255, 255, 255, 0.12)' }} />

                        <Box sx={{ bgcolor: '#1a1a1a', p: 2, borderRadius: 2, mb: 2 }}>
                            <Typography variant="body2" sx={{ color: '#aaa', mb: 1 }}>
                                {video.views} views • {new Date(video.uploadDate).toLocaleDateString()}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    whiteSpace: showFullDescription ? 'normal' : 'pre-line',
                                    display: showFullDescription ? 'block' : '-webkit-box',
                                    WebkitLineClamp: showFullDescription ? 'unset' : 3,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                }}
                            >
                                {video.description}
                            </Typography>
                            {video.description.length > 150 && (
                                <Button
                                    onClick={() => setShowFullDescription(!showFullDescription)}
                                    sx={{ mt: 1, color: '#aaa' }}
                                >
                                    {showFullDescription ? 'Show less' : 'Show more'}
                                </Button>
                            )}
                        </Box>

                        <Divider sx={{ my: 3, bgcolor: 'rgba(255, 255, 255, 0.12)' }} />

                        {/* Comments placeholder */}
                        <Box>
                            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                Comments (Coming Soon)
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#aaa' }}>
                                Comments functionality will be added in a future update.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Sidebar - Recommended videos */}
                    <Box sx={{ width: { xs: '100%', lg: '400px' } }}>
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                            Recommended
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {recommendedVideos.map((recVideo) => (
                                <Box
                                    key={recVideo.id}
                                    onClick={() => navigate(`/watch/${recVideo.id}`)}
                                    sx={{
                                        display: 'flex',
                                        gap: 2,
                                        cursor: 'pointer',
                                        '&:hover': {
                                            bgcolor: 'rgba(255, 255, 255, 0.05)',
                                        },
                                        p: 1,
                                        borderRadius: 1,
                                        transition: 'background-color 0.2s',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 168,
                                            height: 94,
                                            flexShrink: 0,
                                            borderRadius: 1,
                                            overflow: 'hidden',
                                            bgcolor: '#1a1a1a',
                                        }}
                                    >
                                        <img
                                            src={recVideo.thumbnail}
                                            alt={recVideo.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontSize: '14px',
                                                fontWeight: 600,
                                                mb: 0.5,
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {recVideo.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#aaa', fontSize: '12px' }}>
                                            {recVideo.channel.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#888', fontSize: '12px' }}>
                                            {recVideo.views} views
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* More recommendations */}
                <Box sx={{ mt: 4 }}>
                    <VideoCarousel
                        title="More Videos You Might Like"
                        videos={recommendedVideos.slice(0, 12)}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default Watch;
