import { Grid } from "@mui/material";
import React from "react";
import { SelectComponent } from "../../../components";
import TextFieldComponent from "../../../components/inputComponent";

function FilterComponent() {
  return (
    <Grid container spacing={1} my={4}>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <SelectComponent placeholder="Roles" label="Roles" />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <SelectComponent
          placeholder="Number Of Employees"
          label="Number Of Employees"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <SelectComponent label="Experience" />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <SelectComponent label="Remote" />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <SelectComponent label="Minimum Base Pay Salary" />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <TextFieldComponent label="Search Company Name" />
      </Grid>
    </Grid>
  );
}

export default FilterComponent;
