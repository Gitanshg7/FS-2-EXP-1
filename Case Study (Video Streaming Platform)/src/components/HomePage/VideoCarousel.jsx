import React, { useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import VideoCard from './VideoCard';
import SkeletonCard from '../Common/SkeletonCard';
import './VideoCarousel.css';

const VideoCarousel = ({ title, videos, loading = false }) => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            const newScrollLeft = scrollContainerRef.current.scrollLeft +
                (direction === 'left' ? -scrollAmount : scrollAmount);

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Box className="video-carousel" sx={{ mb: 4 }}>
            <Typography
                variant="h5"
                sx={{
                    mb: 2,
                    fontWeight: 600,
                    fontSize: { xs: '18px', md: '24px' }
                }}
            >
                {title}
            </Typography>

            <Box className="carousel-container">
                <IconButton
                    className="carousel-arrow carousel-arrow-left"
                    onClick={() => scroll('left')}
                    sx={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 2,
                        bgcolor: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        '&:hover': {
                            bgcolor: 'rgba(0, 0, 0, 0.9)',
                        },
                    }}
                >
                    <ChevronLeft />
                </IconButton>

                <Box
                    ref={scrollContainerRef}
                    className="carousel-scroll"
                    sx={{
                        display: 'flex',
                        gap: 2,
                        overflowX: 'auto',
                        scrollBehavior: 'smooth',
                        scrollbarWidth: 'none',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        pb: 1,
                    }}
                >
                    {loading ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <Box key={index} sx={{ minWidth: { xs: '250px', sm: '280px', md: '320px' } }}>
                                <SkeletonCard />
                            </Box>
                        ))
                    ) : (
                        videos.map((video) => (
                            <Box key={video.id} sx={{ minWidth: { xs: '250px', sm: '280px', md: '320px' } }}>
                                <VideoCard video={video} />
                            </Box>
                        ))
                    )}
                </Box>

                <IconButton
                    className="carousel-arrow carousel-arrow-right"
                    onClick={() => scroll('right')}
                    sx={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 2,
                        bgcolor: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        '&:hover': {
                            bgcolor: 'rgba(0, 0, 0, 0.9)',
                        },
                    }}
                >
                    <ChevronRight />
                </IconButton>
            </Box>
        </Box>
    );
};

export default VideoCarousel;
