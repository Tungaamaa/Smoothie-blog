import React from "react";
import { Box, Modal as MuiModal } from "@mui/material";




export const Modal = (props) => {
  const { open, handleClose, children } = props;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };

  return (
    <div>
      <MuiModal open={open} onClose={handleClose}>
        <Box sx={style}>{children}</Box>
      </MuiModal>
    </div>
  );
};
