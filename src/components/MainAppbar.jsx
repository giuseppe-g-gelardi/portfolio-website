import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom'
import MuiSwitch from './MuiSwitch'

export default function MainAppBar({ check, change }) {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={10} color='transparent'>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {'>'}_ Welcome
          </Typography>
          {/* dark mode toggle switch */}
          <MuiSwitch onChange={change} checked={check} />
          {/* dark mode toggle */}
        </Toolbar>
        
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab label="Home" component={Link} to='/home' />
          <Tab label="Resume" component={Link} to='/resume' />
          <Tab label="Contact" component={Link} to='/contact' />
          <Tab label="Projects" component={Link} to='/projects' />
        </Tabs>
      </AppBar>
    </Box>
  );
}
