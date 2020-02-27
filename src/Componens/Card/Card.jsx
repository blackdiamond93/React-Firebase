import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Image from 'react-image-resizer';
import './index.css';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width:200,
    margin:"1%",
    height:220,
    backgroundColor:"white",

  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  

  return (
    <React.Fragment>
    <Link to={props.Nombre} className={classes.root}>
    <Card className={classes.root}
      key={props.key}>
      <Typography gutterBottom variant="h5" component="h2">
         <span>{props.Nombre}</span>
          </Typography>
      <CardActionArea>
        <CardMedia>
        <Image src={props.imagen}
          width={200}
          height={150}
          aspect={16/9}
           />
        
        </CardMedia>
        <CardContent>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </Link>
    </React.Fragment>
  );
}
