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
import SelectField from '../../components/controls/SelectField';
import Button from '../../components/controls/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';


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

export default function MovieForm() {

    const classes = useStyle();
    const url = "http://localhost:5123/api/movies"
    
    const [data, setData] = useState({
        name:'',
        genre:'',
        shortDescription:'',
        yearOfRelease:'',
    })

    const validate=()=> {
      let temp={}
      temp.name = values.name?"":"You must enter the Movie name"
      temp.yearOfRelease = parseFloat(values.yearOfRelease)? "":"Please enter a number"
      setErrors({ 
        ...temp
      })

      return Object.values(temp).every(x => x == "")
    }

    const{
        values,
        setValues,
        handleInputChange,
        errors,
        setErrors
    }=UseForm(initialfValues);

    const handleSubmit= e => {
      e.preventDefault()
      if(validate())
      axios.post(url, {
        name: values.name,
        genre: values.genre,
        shortDescription: values.shortDescription,
        yearOfRelease: values.yearOfRelease
      })
      .then(response => {
        console.log(response)
    })
    .catch(error => [
      console.log(error)
    ])
    }


  return (    
    
          <Form onSubmit={handleSubmit}>
            <PageHeader
            title="Add Movie"
            subtitle="Page for adding a new movie"
            icon={<MovieIcon fontSize='large'/>}
        />
        <Paper className={classes.pageContent}>
          <Grid container>
            <Grid item xs ={6}>
              <InputField
              name="name"
              label="Movie Name"
              value={values.name}
              onChange={handleInputChange}
              error={errors.name}
              />
              <InputField
              name="yearOfRelease"
              label="Year Of Release"
              value={values.yearOfRelease}
              onChange={handleInputChange}
              error={errors.yearOfRelease}
              />
              <InputField 
              name="genre"
              label="Input Genre"
              value={values.genre}
              onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs = {6}>
              <TextField
              name="shortDescription"
              label="Short Description of the Movie"
              multiline
              rows={6}
              value={values.shortDescription}
              onChange={handleInputChange}
              />
             <div>
              <Button
                type="submit"
                text="Submit"
                />
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
