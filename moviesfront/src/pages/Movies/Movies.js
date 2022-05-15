import React,{useState, useEffect} from 'react'
import MovieForm from './MovieForm'
import PageHeader from '../../components/PageHeader'
import MovieIcon from '@mui/icons-material/Movie';
import { InputAdornment, Paper, TableBody, TableCell, TableRow, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import UseTable from '../../components/UseTable';
import { Link } from 'react-router-dom';
import InputField from '../../components/controls/InputField';
import { Search } from '@mui/icons-material';
import Button from '../../components/controls/Button';
import { EditOutlined } from '@mui/icons-material';
import PageviewIcon from '@mui/icons-material/Pageview';
import ActionButton from '../../components/controls/ActionButton';


const useStyle = makeStyles(theme =>({
        pageContent:{
            margin:useTheme().spacing(3),
            padding:useTheme().spacing(3),
        },
        searchInput:{
            width:'75%'
        }
    }))

const headCells = [
    {id:'name', label:'Name'},
    {id:'genre', label:'Genre'},
    {id:'yearOfRelease', label:'Year'},
    {id:'actions',label:'Actions'}
]

export default function Movies() {

    const classes = useStyle();
    const [data, setData] = useState([]);
    const [filterFn,setFilterFn] = useState({fn:items => {return items;}})

    const {TblContainer, 
        TblHead, 
        TblPagination, 
        recordsAfterPagingAndSorting
    } = UseTable(data, headCells, filterFn);

    const handleSearch = e =>   {
        let target = e.target;
        setFilterFn({
            fn:items => {
                if (target.value=="")
                return items;
                else
                return items.filter(x => x.name.toLowerCase().includes(target.value ))
            }
        })
    }

    useEffect(() => {
        fetch("http://localhost:5123/api/movies")
        .then((response) => response.json())
        .then((json) => setData(json)); 
    }, []);

  return (
    <div>
        <>
        <PageHeader
            title="List Of Movies"
            subtitle="Page for viewing all the movies"
            icon={<MovieIcon fontSize='large'/>}
        />
        <Paper className={classes.pageContent}>
            {/* <MovieForm/> */}
            <Toolbar>
                <InputField
                label="Search By Movie"
                className={classes.searchInput}
                InputProps={{
                    startAdornment:(<InputAdornment position="start">
                        <Search/>
                        </InputAdornment>)
                }}
                onChange={handleSearch}
                />
                <Button 
                text = "Add New"
                variant = "outlined"
                component={Link} 
                to="movieform"
                />
            </Toolbar>
            <TblContainer>
                <TblHead/>
                <TableBody>
                    {
                        recordsAfterPagingAndSorting().map(item => 
                            (<TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.genre}</TableCell>
                                <TableCell>{item.yearOfRelease}</TableCell>
                                <TableCell>
                                    <ActionButton
                                    component={Link} 
                                    to={`${item.id}`}>
                                    <PageviewIcon/>
                                    </ActionButton>
                                </TableCell>
                            </TableRow>)
                        )
                    }
                </TableBody>
            </TblContainer>
            <TblPagination />
        </Paper>
    </>
    </div>
  )
}
