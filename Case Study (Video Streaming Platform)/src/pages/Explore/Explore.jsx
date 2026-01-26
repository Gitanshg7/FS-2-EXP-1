import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Box, Typography, Chip, Stack } from '@mui/material';
import { mockVideos, categories } from '../../data/mockData';
import { useApp } from '../../context/AppContext';
import VideoCard from '../../components/HomePage/VideoCard';
import SkeletonCard from '../../components/Common/SkeletonCard';

const Explore = () => {
    const [searchParams] = useSearchParams();
    const { searchQuery } = useApp();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredVideos, setFilteredVideos] = useState(mockVideos);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            setSelectedCategory(categoryParam);
        }
    }, [searchParams]);

    useEffect(() => {
        setLoading(true);

        // Simulate loading delay
        setTimeout(() => {
            let videos = [...mockVideos];

            // Filter by search query
            if (searchQuery && searchQuery.trim() !== '') {
                const lowerQuery = searchQuery.toLowerCase();
                videos = videos.filter(video =>
                    video.title.toLowerCase().includes(lowerQuery) ||
                    video.description.toLowerCase().includes(lowerQuery) ||
                    video.channel.name.toLowerCase().includes(lowerQuery) ||
                    video.category.toLowerCase().includes(lowerQuery)
                );
            }

            // Filter by category
            if (selectedCategory !== 'All') {
                videos = videos.filter(video => video.category === selectedCategory);
            }

            setFilteredVideos(videos);
            setLoading(false);
        }, 300);
    }, [searchQuery, selectedCategory]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <Container maxWidth="xl" sx={{ py: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
                {searchQuery ? `Search Results for "${searchQuery}"` : 'Explore'}
            </Typography>

            {/* Category filters */}
            <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                <Chip
                    label="All"
                    onClick={() => handleCategoryChange('All')}
                    color={selectedCategory === 'All' ? 'primary' : 'default'}
                    sx={{
                        fontWeight: selectedCategory === 'All' ? 600 : 400,
                        cursor: 'pointer',
                    }}
                />
                {categories.map((category) => (
                    <Chip
                        key={category}
                        label={category}
                        onClick={() => handleCategoryChange(category)}
                        color={selectedCategory === category ? 'primary' : 'default'}
                        sx={{
                            fontWeight: selectedCategory === category ? 600 : 400,
                            cursor: 'pointer',
                        }}
                    />
                ))}
            </Stack>

            {/* Results count */}
            {!loading && (
                <Typography variant="body2" sx={{ color: '#aaa', mb: 2 }}>
                    {filteredVideos.length} {filteredVideos.length === 1 ? 'video' : 'videos'}
                </Typography>
            )}

            {/* Video grid */}
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
                {loading ? (
                    Array.from({ length: 12 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))
                ) : filteredVideos.length > 0 ? (
                    filteredVideos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))
                ) : (
                    <Typography variant="body1" sx={{ color: '#aaa', gridColumn: '1 / -1' }}>
                        No videos found. Try adjusting your search or filter.
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default Explore;
