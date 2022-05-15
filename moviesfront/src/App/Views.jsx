import {Route, BrowserRouter, Routes} from "react-router-dom";  
import { makeStyles } from '@mui/styles';
import MoviesReturnView from "../pages/Movies/ReturnViews/MoviesReturnView";
import MovieFormReturnView from "../pages/Movies/ReturnViews/MovieFormReturnView";
import MovieInformationReturnView from "../pages/Movies/ReturnViews/MovieInformationReturnView";

const usestyles = makeStyles({
    appMain:{
      paddingLeft:'320px',
      width:'100%' 
    }
  })
  

const Views = () => {

    const classes = usestyles();

    return (
        <Routes>
            <Route path="/" element={<MoviesReturnView/>}/>
            <Route path="/movieform" element={<MovieFormReturnView/>}/>
            <Route path=":id" element={<MovieInformationReturnView/>}/>
            <Route path="*" element={<h1>404 Not Found!</h1>}/>
        </Routes>
    );
}

export default Views;

