import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));




export default function InputText() {
  const classes = useStyles();
  const[city,setCity]=useState(null);
  const handleSubmit=(e)=>{
    e.preventDefault();
    setCity(e.target.value);
    console.log(city)
}

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
    
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onInput={(e)=>setCity(e.target.value)} />
    </form>
  );
}