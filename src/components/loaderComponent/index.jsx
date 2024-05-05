import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function LoaderComponent({ open }) {
  return (
    <div>
      <Backdrop
        sx={{
          zIndex: 3000,
        }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
