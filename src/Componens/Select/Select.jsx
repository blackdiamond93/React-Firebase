import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width:250
  },
}));

export default function GroupedSelect(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Seleccione un menu...</InputLabel>
        <Select native defaultValue="" id="Select" input={<Input id="grouped-native-select" />}>
        {props.children}
        </Select>
      </FormControl>
      
    </div>
  );
}
