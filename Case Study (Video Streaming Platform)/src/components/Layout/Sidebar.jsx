import React from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
    Divider,
} from '@mui/material';
import {
    Home,
    Whatshot,
    Sports,
    Gamepad,
    MusicNote,
    Movie,
    Computer,
    School,
    History,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const menuItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Trending', icon: <Whatshot />, path: '/explore?category=Trending' },
];

const categoryItems = [
    { text: 'Gaming', icon: <Gamepad />, path: '/explore?category=Gaming' },
    { text: 'Music', icon: <MusicNote />, path: '/explore?category=Music' },
    { text: 'Movies', icon: <Movie />, path: '/explore?category=Movies' },
    { text: 'Tech', icon: <Computer />, path: '/explore?category=Tech' },
    { text: 'Sports', icon: <Sports />, path: '/explore?category=Sports' },
    { text: 'Education', icon: <School />, path: '/explore?category=Education' },
];

const Sidebar = ({ mobileOpen, onClose, permanent = true }) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        if (!permanent) {
            onClose();
        }
    };

    const drawerContent = (
        <Box>
            <Box sx={{ p: 2, height: 64, display: 'flex', alignItems: 'center' }} />

            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton onClick={() => handleNavigation(item.path)}>
                            <ListItemIcon sx={{ color: 'white' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.12)' }} />

            <List>
                {categoryItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton onClick={() => handleNavigation(item.path)}>
                            <ListItemIcon sx={{ color: 'white' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            {/* Mobile drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={onClose}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        bgcolor: 'background.paper',
                    },
                }}
            >
                {drawerContent}
            </Drawer>

            {/* Desktop drawer */}
            {permanent && (
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            bgcolor: 'background.paper',
                        },
                    }}
                    open
                >
                    {drawerContent}
                </Drawer>
            )}
        </>
    );
};

export default Sidebar;
