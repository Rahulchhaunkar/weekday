import { FormControl, FormHelperText, TextField } from "@mui/material";

import React from "react";

const TextFieldComponent = ({
  error,
  errorMessage,
  maxLength = 25,
  ...props
}) => {
  return (
    <FormControl fullWidth>
      <TextField
        variant="outlined"
        error={Boolean(error)}
        inputProps={{ maxLength }}
        {...props}
      />
      {error && (
        <FormHelperText sx={{ color: "#d32f2f" }}>
          {errorMessage}
        </FormHelperText>
      )}
    </FormControl>
  );
};
export default TextFieldComponent;
