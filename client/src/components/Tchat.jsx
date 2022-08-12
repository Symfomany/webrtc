import React, { useContext, useState } from 'react';
import { Grid,Stack, Item, Typography, Paper, makeStyles, Box, Button, Card, CardContent, CardMedia, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, BottomNavigation, BottomNavigationAction, TextField } from '@material-ui/core';

import { SocketContext } from '../Context';
import Sidebar from './Sidebar';
import Notifications from './Notifications';
import {  Phone, Restore, Favorite,LocationCity } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  video: {
  },
  gridContainer: {
  },
  paper: {
  },
}));

const Tchat = () => {
  const { sendMess, messages } = useContext(SocketContext);
  const [open, setOpen] = React.useState( true );
  const [txt, setTxt] = React.useState("");

  const classes = useStyles();
  
  const handleMess = () =>
  {
    sendMess( txt );
    setTxt( '' ) 
  }
  
  return (
    <>
    <div>
        <Paper sx={{ margin: 10 }}>
            {messages && messages.map( ( item,i ) =>  <Box key={ i }>{item.txt} <br /> {item.date}</Box> )}
        </Paper>
        <TextField value={txt} onChange={(e) => setTxt(e.target.value)} placeholder='Ecrivez du text'></TextField>
        <Button variant="contained" color="primary" onClick={() => { handleMess()}}>Régir !</Button>
    </div>
      </>
  );
};

export default Tchat;
