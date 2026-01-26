import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { mockVideos } from '../../data/mockData';
import './HeroSection.css';

const HeroSection = () => {
    const navigate = useNavigate();

    // Get a featured video (first trending video)
    const featuredVideo = mockVideos.find(v => v.category === 'Trending') || mockVideos[0];

    const handleWatch = () => {
        navigate(`/watch/${featuredVideo.id}`);
    };

    return (
        <Box className="hero-section">
            <div
                className="hero-background"
                style={{
                    backgroundImage: `url(${featuredVideo.thumbnail})`,
                }}
            />
            <div className="hero-overlay" />

            <Box className="hero-content">
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '32px', sm: '48px', md: '64px' },
                        fontWeight: 700,
                        mb: 2,
                        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
                        maxWidth: '800px',
                    }}
                >
                    {featuredVideo.title}
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: '14px', sm: '16px', md: '18px' },
                        mb: 3,
                        maxWidth: '600px',
                        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}
                >
                    {featuredVideo.description}
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<PlayArrow />}
                        onClick={handleWatch}
                        sx={{
                            fontSize: { xs: '14px', md: '16px' },
                            px: { xs: 3, md: 4 },
                            py: { xs: 1, md: 1.5 },
                            fontWeight: 600,
                            boxShadow: '0 4px 12px rgba(229, 9, 20, 0.5)',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: '0 6px 16px rgba(229, 9, 20, 0.6)',
                            },
                            transition: 'all 0.2s ease',
                        }}
                    >
                        Watch Now
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;
