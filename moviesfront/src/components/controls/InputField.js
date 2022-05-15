import React from 'react'
import { TextField } from '@mui/material'


export default function InputField(props) {

    const{name, label, value, onChange, error=null, ...other}  = props
    
  return (
    <TextField
    variant="outlined"
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    {...other}
    {...(error && {error:true, helperText:error})}
    />
  )
}
