import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Avatar, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LazyImage from '../Common/LazyImage';
import './VideoCard.css';

const VideoCard = ({ video }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        navigate(`/watch/${video.id}`);
    };

    const formatViews = (views) => {
        return views;
    };

    return (
        <Card
            className="video-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            sx={{
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                boxShadow: isHovered
                    ? '0 8px 24px rgba(229, 9, 20, 0.4)'
                    : '0 2px 8px rgba(0, 0, 0, 0.3)',
            }}
        >
            <div className="video-card-thumbnail">
                <LazyImage
                    src={video.thumbnail}
                    alt={video.title}
                    style={{ height: '180px' }}
                />
                <div className="video-card-duration">{video.duration}</div>
            </div>

            <CardContent sx={{ p: 2 }}>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: '14px',
                        fontWeight: 600,
                        mb: 1,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        lineHeight: 1.4,
                    }}
                >
                    {video.title}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                    <Avatar
                        src={video.channel.avatar}
                        alt={video.channel.name}
                        sx={{ width: 28, height: 28 }}
                    />
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#aaa',
                            fontSize: '13px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {video.channel.name}
                    </Typography>
                </Box>

                <Typography
                    variant="body2"
                    sx={{
                        color: '#888',
                        fontSize: '12px',
                    }}
                >
                    {formatViews(video.views)} views
                </Typography>
            </CardContent>
        </Card>
    );
};

export default VideoCard;
