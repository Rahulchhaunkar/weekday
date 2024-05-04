"use client";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

const SelectComponent = ({
  label,
  value,
  menuItems = [],
  error,
  errorMessage,
  ...props
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label" error={error}>
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        error={error}
        {...props}
      >
        {menuItems?.map((item) => (
          <MenuItem key={item?.name} value={item?.value}>
            {" "}
            {item?.name}
          </MenuItem>
        ))}
      </Select>
      {error && (
        <FormHelperText sx={{ color: "#d32f2f" }}>
          {errorMessage}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectComponent;
