import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import Mian from '../Main';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import './index.css'


const drawerWidth = 180;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: { 
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor:"#eeeeee",  
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0.5),
    marginBottom:"5%"
  },
  title: {  
    flexGrow: 1,
    textDecorationLine:"none",
    color:"white"
  },
  tex:{
      margin: "5px",
  },
  toolbar: theme.mixins.toolbar,
  footer:{
    width: "100%",
    height:"50px",
    backgroundColor:"#009688",
    position:"fixed",
    marginTop:"5%",
    bottom: 0,
    zIndex: theme.zIndex.drawer + 1,
    
    color:"white",
  }
  
}));



export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
            <Link to="/Home">Home</Link> 
          </Typography>
          
          <Typography variant="h6" className={classes.tex}>
          <Link to="/Contact">Contact</Link>
          </Typography>
          <Typography variant="h6" className={classes.tex}>
             <Link to="/About">About</Link>
          </Typography>
          <Typography variant="h6" className={classes.tex}>
             <Link to="/Inscripcion">Inscripcion</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {['Restaurantes', 'Tienda de variedades', 'Joyeria', 'Servicios de Reparacion','Servicios Medicos','Centro Turisticos','Venta Automoviles','Inversionista','Prestamo'].map((text, index) => (
           <Link to={"/"+text+"/"}><ListItem button key={text}>
            
           <ListItemText primary={text}/>
           
         </ListItem>
         <Divider/>
         </Link> 
            
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Mian/>
       
      </main>
      <BottomNavigation  className={classes.footer}>
      <Typography variant="h6">Blackdiamond</Typography>
    </BottomNavigation>
    </div>
    
  );
}
