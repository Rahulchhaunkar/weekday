import { Button } from "@mui/material";
import React from "react";

const ApplyButton = ({
  variant = "contained",
  type = "submit",
  children,
  buttonStyle={},
  ...props
}) => {
  return (
    <Button
      variant={variant}
      type={type}
      sx={{
        textTransform: "none",
        minWidth: 250,
        "&:hover": {
          cursor: "pointer",
        },
        ...buttonStyle,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ApplyButton;
