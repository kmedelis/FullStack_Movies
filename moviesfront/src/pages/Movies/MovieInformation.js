import {  TextField } from '@mui/material';
import React,{useState, useEffect} from 'react'
import { AppBar, Toolbar, Grid, InputBase } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import PageHeader from '../../components/PageHeader'
import MovieIcon from '@mui/icons-material/Movie';
import {UseForm, Form} from '../../components/UseForm';
import InputField from '../../components/controls/InputField';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import SelectField from '../../components/controls/SelectField';
import Button from '../../components/controls/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const initialfValues = {
    id:0,
    name:'',
    genre:'',
    shortDescription:'',
    yearOfRelease:'',
}

const useStyle = makeStyles(theme =>({
  pageContent:{
      margin:useTheme().spacing(3),
      padding:useTheme().spacing(3),
  },
  searchInput:{
      width:'75%'
  }
}))

export default function MovieInformation() {

    const classes = useStyle();
    const [data, setData] = useState({
        name:'',
        genre:'',
        shortDescription:'',
        yearOfRelease:'',
    })

  const {id} = useParams();



    const{
        values,
        setValues,
        handleInputChange,
        errors,
        setErrors
    }=UseForm(initialfValues);

    useEffect(() => {
      fetch(`http://localhost:5123/api/movies/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json)); 
  }, []);

  return (  
    <Form>
            <PageHeader
            title={data.name}
            subtitle="Information about the movie"
            icon={<MovieIcon fontSize='large'/>}
        />
        <Paper className={classes.pageContent}>
          <Grid container>
            <Grid item xs ={6}>
              <InputField
              name="name"
              label="Movie Name"
              value={data.name}
              />
              <InputField
              name="yearOfRelease"
              label="Year Of Release"
              value={data.yearOfRelease}
              />
              <InputField 
              name="genre"
              label="Name of Genre"
              value={data.genre}
              />
            </Grid>
            <Grid item xs = {6}>
              <TextField
              name="shortDescription"
              label="Short Description of the Movie"
              multiline
              rows={6}
              value={data.shortDescription}
              />
              <div>
                <Button 
                text = "Go Back"
                variant = "outlined"
                component={Link} 
                to="/"
                />
              </div>
            </Grid>
          </Grid>
          </Paper>
          </Form>
  )
}
