import { Grid,FormControl, MenuItem, Select, TextField,Button } from "@material-ui/core";
import { InputLabel } from "@mui/material";
// import { Button } from "bootstrap";
import React from "react";

const MidBox = () => {
  return (
    <div>
      <h3>Expense Tracker</h3>
      <p>Powered By Speechly</p>
      <div>
        <h2>Total Balance</h2>
        <span>$</span>
        <span>300</span>
        <p>Try to say:</p>
        <span>Add income for $100 in category salary for monday</span>
      </div>
      <hr />
      <Grid container spacing={2}>
      <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel>Type</InputLabel>
        <Select>
          <MenuItem value="Income"> Income</MenuItem>
          <MenuItem value="Expense"> Expense</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel>category</InputLabel>
        <Select>
          <MenuItem value="business"> business</MenuItem>
          <MenuItem value="salary"> salary</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="amount" fullWidth/>
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" label="Date" defaultValue={"12/02/2022"} fullWidth/>
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined" color="primary" fullWidth> Create</Button>
      </Grid>
      </Grid>


    </div>
  );
};

export default MidBox;
