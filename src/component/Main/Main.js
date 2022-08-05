// import { formatMs } from '@material-ui/core';

import { mergeClasses } from '@material-ui/styles';
import React from 'react'
import { Card,CardHeader,CardContent,Typography,Grid,Divider} from "@material-ui/core";
import useStyles from "./style"

 const Main = () => {
  const classes = useStyles()
  return (
    <Card className={mergeClasses.root}>
    <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>

    <CardContent>

    <Typography align="center" variant="h5">Total Balance $100</Typography>
    <Typography variant="subtitle1" style={{lineHeight:'1.5em',marginTop:"20px"}}>
      Try to saying:Add Income for $100 in category Salary for Monday
    </Typography>
    <Divider/>

    </CardContent>
    <CardContent className={classes.cardContent}>
      <Grid container spacing={2}>
        <Grid item xs={12}>

        </Grid>
      </Grid>

    </CardContent>

    
    </Card>
  )
}

export default Main
