import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  buttonStyle : props => {
    return {
      color: props.cool ? "blue" :  "red", 
      backgroundColor: props.cool? "orange" : "yellow"
    }
  },
  textStyle : {
    color: "blue"
  }
}));

export default function App() {

  const classes = useStyles();

  return (
    <div >
      <Button fullWidth className={classes.buttonStyle} >Default</Button>
      <h1 variant="contained"  className={classes.textStyle}>
        This is the text
      </h1>
     
    </div>
  );
}

