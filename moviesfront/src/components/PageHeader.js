import React from 'react'
import { Paper,Card,Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';


const useStyles = makeStyles(theme =>({
    root:{
        backgroundColor:'#fdfdff'
    },
    pageHeader:{
        padding: useTheme().spacing(4),
        display:'flex',
        marginBottom:useTheme().spacing(3)
    },
    pageIcon:{
        display: 'inline-block',
        padding:useTheme().spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:useTheme().spacing(4),
        '$ .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}))

export default function PageHeader(props) {
    const classes = useStyles();
    const {title, subtitle, icon} = props;
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography
                    variant="h6"
                    component="div"
                    >{title}
                    </Typography>
                    <Typography
                    variant="subtitle2"
                    component="div"
                    >{subtitle}
                    </Typography>
                </div>
            </div>
        </Paper>
  )
}
