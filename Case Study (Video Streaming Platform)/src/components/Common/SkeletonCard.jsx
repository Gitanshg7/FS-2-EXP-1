import React from 'react';
import { Card, CardContent, Skeleton, Box } from '@mui/material';

const SkeletonCard = () => {
    return (
        <Card sx={{ backgroundColor: '#1a1a1a', height: '100%' }}>
            <Skeleton
                variant="rectangular"
                width="100%"
                height={180}
                animation="wave"
                sx={{ bgcolor: '#2a2a2a' }}
            />
            <CardContent>
                <Skeleton
                    variant="text"
                    width="90%"
                    height={24}
                    animation="wave"
                    sx={{ bgcolor: '#2a2a2a', mb: 1 }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Skeleton
                        variant="circular"
                        width={32}
                        height={32}
                        animation="wave"
                        sx={{ bgcolor: '#2a2a2a' }}
                    />
                    <Skeleton
                        variant="text"
                        width="60%"
                        height={20}
                        animation="wave"
                        sx={{ bgcolor: '#2a2a2a' }}
                    />
                </Box>
                <Skeleton
                    variant="text"
                    width="50%"
                    height={18}
                    animation="wave"
                    sx={{ bgcolor: '#2a2a2a' }}
                />
            </CardContent>
        </Card>
    );
};

export default SkeletonCard;
