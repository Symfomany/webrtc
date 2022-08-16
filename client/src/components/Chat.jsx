import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import { getDatabase,onValue, ref,set, child, push, update } from "firebase/database";
import firebaseConfig from '../config';
import { initializeApp } from "firebase/app";
import { AppBar, Badge, Button, IconButton, Menu, Toolbar } from '@material-ui/core';
import { MessageTwoTone } from '@material-ui/icons';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh'
  },
  headBG: {
      backgroundColor: '#e0e0e0'
  },
  borderRight500: {
      borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    height: '60vh',
    overflowY: 'auto'
  }
});

const Chat = () => {
  const classes = useStyles();
  const [txt, setTxt] = React.useState("");

  const [messages, setMessages] = React.useState( [] )
  
  useEffect( () =>
  {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase();
    const clientCountRef = ref( db, 'clients/CKIEWC0imDhVRRtodcQWdQu4GCd2/messages/CKIEWC0imDhVRRtodcQWdQu4GCd2/messages' );
    onValue(clientCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log( data );
      setMessages( data)
    });
  }, ['messages'])
  
  const sendMessage = async () =>
  {
    const db = getDatabase();
    await push(ref(db, '/clients/CKIEWC0imDhVRRtodcQWdQu4GCd2/messages/CKIEWC0imDhVRRtodcQWdQu4GCd2/messages'), {
      text: txt,
      created: new Date()
    } );
    setTxt( '' ) 
  }
  
  return (
      <div>
      <Grid container component={Paper} className={classes.chatSection}>
          <AppBar  color="secondary" position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <Menu />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                News
            </Typography>
               <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MessageTwoTone />
                </Badge>
              </IconButton> 
            </Toolbar>
          </AppBar>        
        
            <Grid item xs={3} className={classes.borderRight500}>
                <List>
                    <ListItem button key="RemySharp">
                        <ListItemIcon>
                        <Avatar alt="Remy Sharp" src="https://play-lh.googleusercontent.com/7Z4x3nLGglKbIDMafIPmdFUB9zpwu-k3HHbIJ1DeWz-4HCp9IFfCzk5r1JsmyiT85y1v" />
                        </ListItemIcon>
                        <ListItemText primary="Julien Boyer"></ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <Grid item xs={12} style={{padding: '10px'}}>
                    <TextField id="outlined-basic-email" label="Rechercher mes praticiens" variant="outlined" fullWidth />
                </Grid>
                <Divider />
                <List>
                    <ListItem button key="RemySharp">
                        <ListItemIcon>
                            <Avatar alt="Remy Sharp" src="https://mario.nintendo.com/static/70a63717b736085b71768be7a2558da7/e30b6/luigi-unstack-closed.png" />
                        </ListItemIcon>
                        <ListItemText primary="Simon Thenoz" secondary="Yoga">Simon Thenoz</ListItemText>
                        {/* <ListItemText secondary="online"  align="right"></ListItemText> */}
                    </ListItem>
                    <ListItem button key="Alice">
                        <ListItemIcon>
                            <Avatar alt="Alice" src="https://e1.pngegg.com/pngimages/301/255/png-clipart-super-mario-princess-peach-illustration.png" />
                        </ListItemIcon>
                        <ListItemText primary="Manuel Briand" secondary="Sophrologue" >Manuel Briand</ListItemText>
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={9}>
                <List className={classes.messageArea}>
                    <ListItem key="1">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary="Hello Julien, quoi de neuf aujourd'hui ?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="09:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
            {messages && messages.map( ( message, key ) => <ListItem key={key}>
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText align="left" primary={message.txt}></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="left" secondary={message.created}></ListItemText>
                </Grid>
              </Grid>
            </ListItem> )}
          </List>
                
                <Divider />
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField  value={txt} onChange={(e) => setTxt(e.target.vaTextFieldlue)}  id="outlined-basic-email" label="Réagir ici" fullWidth />
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab onClick={sendMessage} color="primary" aria-label="add"><SendIcon /></Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </div>
  );
}

export default Chat;