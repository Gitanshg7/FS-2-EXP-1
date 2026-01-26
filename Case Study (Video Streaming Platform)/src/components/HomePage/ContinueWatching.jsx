import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import { useApp } from '../../context/AppContext';
import VideoCard from './VideoCard';
import './ContinueWatching.css';

const ContinueWatching = () => {
    const { getContinueWatching } = useApp();
    const continueWatchingVideos = getContinueWatching();

    if (continueWatchingVideos.length === 0) {
        return null;
    }

    return (
        <Box sx={{ mb: 4 }}>
            <Typography
                variant="h5"
                sx={{
                    mb: 2,
                    fontWeight: 600,
                    fontSize: { xs: '18px', md: '24px' }
                }}
            >
                Continue Watching
            </Typography>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(auto-fill, minmax(250px, 1fr))',
                        sm: 'repeat(auto-fill, minmax(280px, 1fr))',
                        md: 'repeat(auto-fill, minmax(320px, 1fr))',
                    },
                    gap: 2,
                }}
            >
                {continueWatchingVideos.map((video) => (
                    <Box key={video.id} className="continue-watching-card">
                        <VideoCard video={video} />
                        <LinearProgress
                            variant="determinate"
                            value={video.progress}
                            sx={{
                                height: 4,
                                mt: -0.5,
                                bgcolor: 'rgba(255, 255, 255, 0.1)',
                                '& .MuiLinearProgress-bar': {
                                    bgcolor: '#e50914',
                                },
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ContinueWatching;
