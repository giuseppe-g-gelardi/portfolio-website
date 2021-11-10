import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@material-ui/icons/Menu'
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
      <AppBar position="static" elevation={10}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome
          </Typography>
        
          {/* dark mode toggle switch */}
          <Switch 
            onChange={change}
            checked={check}
          />
          {/* dark mode toggle switch */}

        </Toolbar>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Home" component={Link} to='/home' />
            <Tab label="Resume" component={Link} to='/resume' />
          </Tabs>
        </Box>
      </AppBar>
    </Box>
  );
}


// {/* <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" elevation={10}>
//         <Toolbar>
//           {/* <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton> */}
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Welcome
//           </Typography>
        
//           {/* dark mode toggle switch */}
//           <Switch />
//           {/* dark mode toggle switch */}

//         </Toolbar>
//         <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
//           <Tabs value={value} onChange={handleChange} centered>
//             <Tab label="Home" component={Link} to='/home' />
//             <Tab label="Resume" component={Link} to='/resume' />
//           </Tabs>
//         </Box>
//       </AppBar>
//     </Box> */}
