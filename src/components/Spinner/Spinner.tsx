import { Box, CircularProgress } from "@mui/material";

const CustomSpinner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: 'rgba(0, 0, 0, 0.6)',
        // opacity: .6
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default CustomSpinner;
