import { Paper } from "@mui/material";
import React from "react";

const PaperComponent = ({ children, paperStyle, ...props }) => {
  return (
    <Paper elevation={4} sx={{ mx: 2, py: 2, px: 3, ...paperStyle }} {...props}>
      {children}
    </Paper>
  );
};

export default PaperComponent;
