
import { Typography, Drawer, AppBar, Button, IconButton, Toolbar, Box, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Avatar, Divider, List } from '@material-ui/core';
import clsx from 'clsx';
import { useState } from 'react';
import {  AccountCircle, Inbox, Mail, Menu as MenuIcon, Message, MessageOutlined, MessageRounded, MessageTwoTone } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
  display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing( 0, 1 ),
    ...theme.mixins.toolbar,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
   hide: {
    display: 'none',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
} ) );
const drawerWidth = 240;


const Bar = () =>
{
  const classes = useStyles();
  const [open, setOpen] = useState( false ); //TODO: True onload

 
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

    
    return ( <><AppBar position="fixed" className={clsx( classes.appBar, open && classes.appBarShift )}>
      <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx( classes.menuButton, open && classes.menuButtonHidden )}
            >
                <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                <MessageOutlined /> Taiwa Tchat
            </Typography>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            
          
            {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
    </AppBar>
    <Drawer
       variant="permanent"
       className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
       classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
       open={open}
      >
        <div className={classes.toolbarIcon}>
          <Avatar src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/07/44/67/0744675c-f21a-4c8d-2389-cab6e51ddd54/AppIcon-1x_U007emarketing-0-10-0-85-220.png/1200x630wa.png" />
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
         <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </> )
    
}


export default Bar;