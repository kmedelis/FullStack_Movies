import React from 'react'
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material'


const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 0,
        margin: useTheme().spacing(3)
    },
}))
export default function ActionButton(props) {

    const { color, children, onClick, redirectLink,...other } = props;
    const classes = useStyles();

    return (
        <MuiButton
            className={`${classes.root} ${classes[color]}`}
            onClick={onClick}
            {...other}>
            {children}
        </MuiButton>
    )
}