import React from 'react'
import { Button as MuiButton } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles';



export default function Button(props) {

    const {text, size, color, variant, onClick, ...other} = props


  return (
    <MuiButton
      style={{margin: 10}}
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}>
      {text}
    </MuiButton>
  )
}
