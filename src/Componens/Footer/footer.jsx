import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: "100%",
    height:"50px",
    backgroundColor:"#009688",
    position:"absolute",
    marginTop:"5%",
    bottom: 0,
    zIndex: + 1,
    
    color:"white",
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <Typography variant="h6">Blackdiamond</Typography>
    </BottomNavigation>
  );
}