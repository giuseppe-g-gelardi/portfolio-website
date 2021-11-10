import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@material-ui/core/Switch'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom'

export default function MainAppBar({ check, change }) {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={10} color='primary'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome
          </Typography>
          {/* dark mode toggle switch */}
          <Switch onChange={change} checked={check} />{/* dark mode toggle */}
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
        </Tabs>
      </AppBar>
    </Box>
  );
}
