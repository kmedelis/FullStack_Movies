import MovieForm from '../MovieForm';
import SideMenu from '../../../components/SideMenu';
import { makeStyles } from '@mui/styles';
import Header from '../../../components/Header';
import { CssBaseline } from '@mui/material';

const usestyles = makeStyles({
    appMain:{
      paddingLeft:'320px',
      width:'100%' 
    }
  })
  


const MovieFormReturnView = () => {

    const classes = usestyles();

    return (
    <>
    <SideMenu/>
    <div className={classes.appMain}>
    <Header/>
    <MovieForm/>
    </div>
    <CssBaseline />
    </>
    )
}

export default MovieFormReturnView