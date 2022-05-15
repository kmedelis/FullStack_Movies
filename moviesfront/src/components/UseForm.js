import React,{useState} from 'react'
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

export function UseForm(initialfValues) {

    const[values,setValues] = useState(initialfValues);
    const[errors,setErrors] = useState({});

    const handleInputChange = e=>{
        const{name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
        
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    }
}

const useStyle = makeStyles(theme =>({
    root:{
        '& .MuiFormControl-root': {
            width:'70%',
            margin:useTheme().spacing(1),
        },
    }
}))


export  function Form(props) {

    const classes=useStyle();
    const {children, ...other} = props;
    return (
        <form className={classes.root} {...other}>
            {props.children}
        </form>
    )
}
