import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 10
  }
} ) );


const Main = () => 
{
    const classes = useStyles();

  return ( <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Paper className={ classes.paper}>
      <Typography variant="h4" gutterBottom component="div">Main Dashboard  </Typography>
    </Paper>
    </Container>)
}

export default Main