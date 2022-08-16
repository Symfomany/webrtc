import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
}));
const MenuTop = () => 
{
  
  
  return ( <Grid container justifyContent="center" spacing={2}>
              <Button to="/tchat">Goo</Button>
              <Button color="primary" to="/tchat">Voir le Tchat</Button>          
              <Button color="primary" to="/host">Créer un meeting</Button>
              <Button color="primary" to="/join">Rejoindre un meeting</Button>
            </Grid>)
}

export default MenuTop