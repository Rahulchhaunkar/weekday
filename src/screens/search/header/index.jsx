import { Grid, IconButton } from "@mui/material";
import { SelectComponent } from "../../../components";
import TextFieldComponent from "../../../components/inputComponent";
import { Refresh } from "@mui/icons-material";

function FilterComponent({
  role,
  reset,
  remote,
  minSalary,
  experience,
  companyName,
  employeeCount,
  handleFieldChange,
}) {
  return (
    <Grid container spacing={1} my={4}>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <SelectComponent
          defaultValue=""
          value={role}
          placeholder="Roles"
          label="Roles"
          name="role"
          menuItems={[
            { name: "Front-end", value: "frontend" },
            { name: "Back-end", value: "backend" },
            { name: "IOS", value: "ios" },
            { name: "ANDROID", value: "android" },
          ]}
          onChange={handleFieldChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <SelectComponent
          defaultValue=""
          name="employeeCount"
          value={employeeCount}
          placeholder="Number Of Employees"
          label="Number Of Employees"
          menuItems={[
            { name: "1-10", value: 10 },
            { name: "10-100", value: 100 },
            { name: "100-500", value: 500 },
            { name: "500-1000", value: 1000 },
            { name: "1000-5000", value: 5000 },
          ]}
          onChange={handleFieldChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <SelectComponent
          defaultValue=""
          name="experience"
          value={experience}
          label="Experience"
          menuItems={[
            { name: "1 Year", value: 1 },
            { name: "2 Years", value: 2 },
            { name: "3 Years", value: 3 },
            { name: "4 Years", value: 4 },
            { name: "5 Years", value: 5 },
            { name: "6 Years", value: 6 },
            { name: "7 Years", value: 7 },
            { name: "8 Years", value: 8 },
          ]}
          onChange={handleFieldChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <SelectComponent
          name="remote"
          value={remote}
          label="Remote"
          menuItems={[
            { name: "Yes", value: true },
            { name: "No", value: false },
          ]}
          onChange={handleFieldChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <SelectComponent
          defaultValue=""
          name="minSalary"
          value={minSalary}
          label="Minimum Base Pay Salary"
          menuItems={[
            { name: "1 LPA", value: 1 },
            { name: "2 LPA", value: 2 },
            { name: "3 LPA", value: 3 },
            { name: "4 LPA", value: 4 },
            { name: "5 LPA", value: 5 },
            { name: "6 LPA", value: 6 },
            { name: "7 LPA", value: 7 },
            { name: "8 LPA", value: 8 },
          ]}
          onChange={handleFieldChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        
        <TextFieldComponent
          name="companyName"
          label="Search Company Name"
          value={companyName}
          onChange={handleFieldChange}
        />
      </Grid>
      <IconButton onClick={reset}>
        <Refresh /> Reset
      </IconButton>
    </Grid>
  );
}

export default FilterComponent;
