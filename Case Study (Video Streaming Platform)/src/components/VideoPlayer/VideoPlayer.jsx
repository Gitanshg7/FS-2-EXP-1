import React, { useState, useRef, useEffect } from 'react';
import {
    PlayArrow,
    Pause,
    VolumeUp,
    VolumeOff,
    Fullscreen,
    FullscreenExit,
    Settings,
    PictureInPicture,
    Forward10,
    Replay10,
    AspectRatio
} from '@mui/icons-material';
import { IconButton, Slider, Menu, MenuItem, Tooltip } from '@mui/material';
import { useApp } from '../../context/AppContext';
import './VideoPlayer.css';

const VideoPlayer = ({ video, theaterMode, onTheaterModeToggle }) => {
    const videoRef = useRef(null);
    const playerContainerRef = useRef(null);
    const controlsTimeoutRef = useRef(null);

    const { updatePlaybackPosition, preferences, updatePreference } = useApp();

    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(preferences.volume || 1);
    const [muted, setMuted] = useState(false);
    const [playbackSpeed, setPlaybackSpeed] = useState(preferences.playbackSpeed || 1);
    const [fullscreen, setFullscreen] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [buffered, setBuffered] = useState(0);
    const [settingsAnchor, setSettingsAnchor] = useState(null);

    // Load saved playback position and autoplay
    useEffect(() => {
        if (videoRef.current && video) {
            const savedPosition = preferences.playbackPositions?.[video.id];
            if (savedPosition && savedPosition.position > 5) {
                videoRef.current.currentTime = savedPosition.position;
            }

            // Autoplay the video
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setPlaying(true);
                    })
                    .catch(error => {
                        // Autoplay was prevented by browser
                        console.log('Autoplay prevented:', error);
                    });
            }
        }
    }, [video, preferences.playbackPositions]);

    // Save playback position periodically
    useEffect(() => {
        const interval = setInterval(() => {
            if (videoRef.current && video && playing) {
                updatePlaybackPosition(
                    video.id,
                    videoRef.current.currentTime,
                    videoRef.current.duration
                );
            }
        }, 5000); // Save every 5 seconds

        return () => clearInterval(interval);
    }, [video, playing, updatePlaybackPosition]);

    // Update time
    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);

            // Update buffered
            if (videoRef.current.buffered.length > 0) {
                const bufferedEnd = videoRef.current.buffered.end(videoRef.current.buffered.length - 1);
                setBuffered((bufferedEnd / videoRef.current.duration) * 100);
            }
        }
    };

    // Load metadata
    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    // Play/Pause toggle
    const togglePlay = () => {
        if (videoRef.current) {
            if (playing) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setPlaying(!playing);
        }
    };

    // Seek
    const handleSeek = (event, value) => {
        if (videoRef.current) {
            const newTime = (value / 100) * duration;
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    // Volume change
    const handleVolumeChange = (event, value) => {
        const newVolume = value / 100;
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
        updatePreference('volume', newVolume);
        if (newVolume > 0) setMuted(false);
    };

    // Mute toggle
    const toggleMute = () => {
        setMuted(!muted);
        if (videoRef.current) {
            videoRef.current.muted = !muted;
        }
    };

    // Playback speed
    const handleSpeedChange = (speed) => {
        setPlaybackSpeed(speed);
        if (videoRef.current) {
            videoRef.current.playbackRate = speed;
        }
        updatePreference('playbackSpeed', speed);
        setSettingsAnchor(null);
    };

    // Fullscreen toggle
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            playerContainerRef.current?.requestFullscreen();
            setFullscreen(true);
        } else {
            document.exitFullscreen();
            setFullscreen(false);
        }
    };

    // Picture-in-Picture
    const togglePiP = async () => {
        try {
            if (document.pictureInPictureElement) {
                await document.exitPictureInPicture();
            } else {
                await videoRef.current?.requestPictureInPicture();
            }
        } catch (error) {
            console.error('PiP error:', error);
        }
    };

    // Skip forward/backward
    const skip = (seconds) => {
        if (videoRef.current) {
            videoRef.current.currentTime += seconds;
        }
    };

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.target.tagName === 'INPUT') return;

            switch (e.key.toLowerCase()) {
                case ' ':
                case 'k':
                    e.preventDefault();
                    togglePlay();
                    break;
                case 'arrowleft':
                    e.preventDefault();
                    skip(-5);
                    break;
                case 'arrowright':
                    e.preventDefault();
                    skip(5);
                    break;
                case 'arrowup':
                    e.preventDefault();
                    handleVolumeChange(null, Math.min((volume * 100) + 5, 100));
                    break;
                case 'arrowdown':
                    e.preventDefault();
                    handleVolumeChange(null, Math.max((volume * 100) - 5, 0));
                    break;
                case 'm':
                    e.preventDefault();
                    toggleMute();
                    break;
                case 'f':
                    e.preventDefault();
                    toggleFullscreen();
                    break;
                case 't':
                    e.preventDefault();
                    onTheaterModeToggle();
                    break;
                case 'p':
                    e.preventDefault();
                    togglePiP();
                    break;
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    e.preventDefault();
                    const percentage = parseInt(e.key) * 10;
                    if (videoRef.current) {
                        videoRef.current.currentTime = (percentage / 100) * duration;
                    }
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [playing, volume, duration]);

    // Auto-hide controls
    const handleMouseMove = () => {
        setShowControls(true);

        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }

        controlsTimeoutRef.current = setTimeout(() => {
            if (playing) {
                setShowControls(false);
            }
        }, 3000);
    };

    // Format time
    const formatTime = (seconds) => {
        if (isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div
            ref={playerContainerRef}
            className={`video-player-container ${theaterMode ? 'theater-mode' : ''}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => playing && setShowControls(false)}
        >
            <video
                ref={videoRef}
                className="video-element"
                src={video.videoUrl}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onClick={togglePlay}
            />

            <div className={`video-controls ${showControls ? 'visible' : 'hidden'}`}>
                {/* Progress bar */}
                <div className="progress-bar-container">
                    <div className="buffered-bar" style={{ width: `${buffered}%` }} />
                    <Slider
                        value={(currentTime / duration) * 100 || 0}
                        onChange={handleSeek}
                        className="progress-slider"
                        sx={{
                            color: '#e50914',
                            height: 4,
                            '& .MuiSlider-thumb': {
                                width: 12,
                                height: 12,
                                '&:hover': {
                                    boxShadow: '0 0 0 8px rgba(229, 9, 20, 0.16)',
                                },
                            },
                        }}
                    />
                </div>

                {/* Control buttons */}
                <div className="controls-row">
                    <div className="controls-left">
                        <Tooltip title="Play/Pause (Space)">
                            <IconButton onClick={togglePlay} sx={{ color: 'white' }}>
                                {playing ? <Pause /> : <PlayArrow />}
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Rewind 10s">
                            <IconButton onClick={() => skip(-10)} sx={{ color: 'white' }}>
                                <Replay10 />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Forward 10s">
                            <IconButton onClick={() => skip(10)} sx={{ color: 'white' }}>
                                <Forward10 />
                            </IconButton>
                        </Tooltip>

                        <div className="volume-controls">
                            <Tooltip title="Mute (M)">
                                <IconButton onClick={toggleMute} sx={{ color: 'white' }}>
                                    {muted || volume === 0 ? <VolumeOff /> : <VolumeUp />}
                                </IconButton>
                            </Tooltip>
                            <Slider
                                value={muted ? 0 : volume * 100}
                                onChange={handleVolumeChange}
                                className="volume-slider"
                                sx={{
                                    width: 80,
                                    color: 'white',
                                    '& .MuiSlider-thumb': {
                                        width: 12,
                                        height: 12,
                                    },
                                }}
                            />
                        </div>

                        <div className="time-display">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </div>
                    </div>

                    <div className="controls-right">
                        <Tooltip title="Speed">
                            <IconButton
                                onClick={(e) => setSettingsAnchor(e.currentTarget)}
                                sx={{ color: 'white' }}
                            >
                                <Settings />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={settingsAnchor}
                            open={Boolean(settingsAnchor)}
                            onClose={() => setSettingsAnchor(null)}
                        >
                            {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map(speed => (
                                <MenuItem
                                    key={speed}
                                    onClick={() => handleSpeedChange(speed)}
                                    selected={playbackSpeed === speed}
                                >
                                    {speed}x
                                </MenuItem>
                            ))}
                        </Menu>

                        <Tooltip title="Picture-in-Picture (P)">
                            <IconButton onClick={togglePiP} sx={{ color: 'white' }}>
                                <PictureInPicture />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Theater Mode (T)">
                            <IconButton onClick={onTheaterModeToggle} sx={{ color: 'white' }}>
                                <AspectRatio />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Fullscreen (F)">
                            <IconButton onClick={toggleFullscreen} sx={{ color: 'white' }}>
                                {fullscreen ? <FullscreenExit /> : <Fullscreen />}
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
