import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import './index.css';





const useStyles = makeStyles(theme => ({
  
  root: {
    flexGrow: 1,
  
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecorationLine:"none"
  },
  tex:{
      margin: "5px",
  },
}));

const NavBar=()=> {
  const classes = useStyles();
  return (
    <React.Fragment>
    <div className={classes.root} >
      <AppBar position="static"  >
        <Toolbar >
         
          <Typography variant="h6" className={classes.title}>
            <Link to="/Home">Home</Link> 
          </Typography>
          
          <Typography variant="h6" className={classes.tex}>
          <Link to="/Contact">Contact</Link>
          </Typography>
          <Typography variant="h6" className={classes.tex}>
             <Link to="/About">About</Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        
      </AppBar>
    </div>
    </React.Fragment>
    
  );
}

export default NavBar;