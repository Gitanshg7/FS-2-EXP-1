import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { AppProvider } from './context/AppContext';
import theme from './theme';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import Home from './pages/Home/Home';
import Watch from './pages/Watch/Watch';
import Explore from './pages/Explore/Explore';
import './App.css';

const drawerWidth = 240;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <Router>
          <Navbar onMenuClick={handleDrawerToggle} />

          <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar
              mobileOpen={mobileOpen}
              onClose={handleDrawerToggle}
              permanent={true}
            />

            <Box
              component="main"
              sx={{
                flexGrow: 1,
                pt: 8,
                ml: { xs: 0, md: `${drawerWidth}px` },
                minHeight: '100vh',
                bgcolor: 'background.default',
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/watch/:videoId" element={<Watch />} />
                <Route path="/explore" element={<Explore />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
