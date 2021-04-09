import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import api from '../api';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
   
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  table: {
    minWidth: 650,
    marginTop:100
  },
  root2: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    }
  },
  image:{
     height:200,
     width:200 
  }

}));




export default function InputText() {
  const classes = useStyles();
  const[city,setCity]=useState(null);
  const[destination,setDestination]=useState(null);
  const[error,setError]=useState("Enter data");
  const handleSubmit=(e)=>{
    e.preventDefault();
    setCity(e.target.value);

    console.log(city)
    api.getDestinationByName(city).then((destination) => {
        console.log('dest',destination)
       setDestination(destination.data.data);
   
    console.log(destination.data.data)
    }).catch((err) => setError(err.toString()))
}


  return (
      <>
    <form className={classes.root}  onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="City" variant="outlined" onInput={(e)=>setCity(e.target.value)} />
    </form>
    {destination?
    <>
    <div className={classes.root2}>
    <Paper variant="outlined" ><img className={classes.image} src={destination.images}></img></Paper>
    </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Currency</TableCell>
            <TableCell align="right">Attractions</TableCell>
            <TableCell align="right">Languages</TableCell>
            <TableCell align="right">Description</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow key={destination._id}>
              <TableCell component="th" scope="row">
                {destination.name}
              </TableCell>
              <TableCell align="right">{destination.country}</TableCell>
              <TableCell align="right">{destination.currency}</TableCell>
              <TableCell align="right">{destination.attractions.join(",")}</TableCell>
              <TableCell align="right">{destination.languages.join(",")}</TableCell>
              <TableCell align="right">{destination.description}</TableCell>
              <TableCell align="right"><Button variant="contained" color="primary"href={`https://www.google.co.in/maps/dir/${destination.attractions.join("/")}`} target="_blank">View Itinerary</Button></TableCell>
            </TableRow>
        
        </TableBody>
        </Table>
       </TableContainer>  </>   
    :<h1>{error}</h1>}
    </>
  );
}
