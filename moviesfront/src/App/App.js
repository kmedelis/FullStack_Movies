import React from 'react';
import './App.css';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import { makeStyles } from '@mui/styles';
import MovieIcon from '@mui/icons-material/Movie';
import { CssBaseline } from '@mui/material';
import {Route, BrowserRouter, Routes} from "react-router-dom";  
import MovieForm from '../pages/Movies/MovieForm';
import Movies from '../pages/Movies/Movies';
import Views from './Views'

const usestyles = makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%' 
  }
})


function App() {
  const classes = usestyles();

  return (
    <BrowserRouter>
    <Views/>
    </BrowserRouter>
  );
}

export default App;
