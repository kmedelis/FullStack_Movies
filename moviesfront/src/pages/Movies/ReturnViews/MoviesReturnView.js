import Movies from '../../../pages/Movies/Movies';
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
  

const MoviesReturnView = () => {

    const classes = usestyles();

    return (
    <>
    <SideMenu/>
    <div className={classes.appMain}>
    <Header/>
    <Movies/>
    </div>
    <CssBaseline />
    </>
    )
}

export default MoviesReturnView;