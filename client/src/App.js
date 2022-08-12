import React, { useState } from 'react';
import { Typography, AppBar, Button, IconButton, Toolbar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';
import { Menu as MenuIcon } from "@material-ui/icons";
import Tchat from './components/Tchat';

const useStyles = makeStyles((theme) => ({
  appBar: {
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar dark="true"  position="static">
        <Toolbar  dark="true" >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Taiwa Tchat
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
  
      <Tchat />
      
      
      <VideoPlayer />
        
    </div>
  );
};

export default App;


