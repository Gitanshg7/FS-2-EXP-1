import React from 'react';
import { Container, Box } from '@mui/material';
import HeroSection from '../../components/HomePage/HeroSection';
import ContinueWatching from '../../components/HomePage/ContinueWatching';
import VideoCarousel from '../../components/HomePage/VideoCarousel';
import { getVideosByCategory } from '../../data/mockData';
import { useApp } from '../../context/AppContext';

const Home = () => {
    const { getRecommendedVideos } = useApp();

    return (
        <Box>
            <HeroSection />

            <Container maxWidth="xl" sx={{ pb: 4 }}>
                <ContinueWatching />

                <VideoCarousel
                    title="Recommended for You"
                    videos={getRecommendedVideos(null, 12)}
                />

                <VideoCarousel
                    title="Trending Now"
                    videos={getVideosByCategory('Trending')}
                />

                <VideoCarousel
                    title="Gaming"
                    videos={getVideosByCategory('Gaming')}
                />

                <VideoCarousel
                    title="Music"
                    videos={getVideosByCategory('Music')}
                />

                <VideoCarousel
                    title="Movies & TV"
                    videos={getVideosByCategory('Movies')}
                />

                <VideoCarousel
                    title="Tech & Science"
                    videos={getVideosByCategory('Tech')}
                />

                <VideoCarousel
                    title="Sports"
                    videos={getVideosByCategory('Sports')}
                />

                <VideoCarousel
                    title="Education"
                    videos={getVideosByCategory('Education')}
                />
            </Container>
        </Box>
    );
};

export default Home;
