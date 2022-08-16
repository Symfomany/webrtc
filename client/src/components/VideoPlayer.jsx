import React, { useContext, useState } from 'react';
import { Grid, Typography, Paper, makeStyles, Box, Button, Card, CardContent, CardMedia, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, BottomNavigation, BottomNavigationAction, Container } from '@material-ui/core';

import { SocketContext } from '../Context';
import Sidebar from './Sidebar';
import Notifications from './Notifications';
import {  Phone, Restore, Favorite,LocationCity } from '@material-ui/icons';
import { ContextProvider } from '../Context';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '800px',
    [theme.breakpoints.down( 'xs' )]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    margin: '10px',
  },
  media: {
    height: 140,
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();
  const [callAccept, setCallAccept] = useState(false);
  const [open, setOpen] = React.useState(false); // Todo true 

  return (
  <ContextProvider>
    
    <Container container>
      <Box flexDirection="row" alignItems="center" justifyContent="center" sx={{ p: 3, mb: 20 }}>
        <Button size="large" startIcon={<Phone />} onClick={() => setCallAccept(true)}  color="secondary" variant="contained">Je commence à tchater</Button>
      </Box>
    
    <Dialog
      open={open}
      onClose={()  => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Bienvenue Taiwa"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Coucou Taiwa ! Ici Tchat privée tu créer un pseudo tu  copi l'ID générer puis tu le donne à un pote :)
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button  onClick={ ()  => setOpen(false)} color="primary" >
          Ok j'accepte
        </Button>
      </DialogActions>
    </Dialog>
      
    <Grid style={{ display: callAccept ? 'block' : 'none' }} container className={classes.gridContainer}>
      {stream && (
          <Card className={classes.paper}>
             <CardContent>
                <Grid item xs={12} md={6}>
                  <Box elevation={2}><video playsInline muted ref={myVideo} autoPlay className={classes.video} /></Box>
                  <Typography variant="h5" gutterBottom>{name || 'Pseudo'}</Typography>
                </Grid>
              </CardContent>
        </Card>
      )}
      {callAccepted && !callEnded && (
        <Card  className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Entrez un pseudo'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Card>
      )}
      </Grid>
      
      <div style={{ display: callAccept ? 'block' : 'none' }}>
        <Sidebar >
          <Notifications />
        </Sidebar>
      </div>
      
      <BottomNavigation
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Recents" icon={<Restore />} />
          <BottomNavigationAction label="Favorites" icon={<Favorite />} />
          <BottomNavigationAction label="Nearby" icon={<LocationCity />} />
        </BottomNavigation>
      </Container>
      </ContextProvider>
  );
};

export default VideoPlayer;
