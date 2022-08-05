import React from "react";
import {Grid} from "@material-ui/core"
import Main from "./component/Main/Main"
import Details from "./component/Deatails/Details";
import useStyles from "./style"
function App() {

  const classes = useStyles();
  return (
 
    <>
    <div>
      <Grid className={classes.grid} container spacing ={0} alignItem="center" justify="center" style={{height:'100vh'}}>
        <Grid item xs={12} sm={4}>
          <Details title="Income"/>

        </Grid>
        <Grid item xs={12} sm={3}>
         <Main/>

        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense"/>

        </Grid>

      </Grid>
    </div>
    
    </>
  );
}

export default App;
