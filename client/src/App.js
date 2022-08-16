import React, { useEffect, useState } from 'react';
import { Typography, AppBar, Button, IconButton, Toolbar, Box, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import {  Inbox, Mail, Menu as MenuIcon, Message, MessageOutlined, MessageRounded, MessageTwoTone } from "@material-ui/icons";
import Tchat from './components/Tchat';
import Chat from './components/Chat';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
// import { Link, Router, useNavigate } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bar from './components/Bar';
import Join from './components/Join';
import Host from './components/Host';
import Main from './components/Main';
import {
  RecoilRoot,
} from 'recoil';
import MenuTop from './components/MenuTop';
const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
     padding: theme.spacing(3),
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));
 const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
     
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const App = () =>
{
  useEffect( () =>
  {
  })
  
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [open, setOpen] = React.useState( false ); //TODO: True onload
  const [messages, setMessages] = React.useState(false); //TODO: True onload


  return (
    <div className={classes.root}>
      <RecoilRoot>
        <CssBaseline />
        <Bar></Bar>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container container>
            <MenuTop></MenuTop>
          </Container>
          <Container maxWidth="lg" className={classes.container}>
              <BrowserRouter>
                <Routes>
                {/* <Route path="/" element={<Main />} />    */}
                  <Route path="/" element={<Chat />} />   
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/join" element={<Join />} />
                  <Route path="/host" element={<Host />} />
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Routes>
              </BrowserRouter>
            {/* <Chat /> */}
            {/* <VideoPlayer /> */}
            <Box mt={8}>
              <Copyright />
            </Box>
            </Container>
          </main>
      </RecoilRoot>
    </div>
  );
};

export default App;


