import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ description }) {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState(description);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        style={{ marginLeft: "10 auto", display: "flex" }}
        onClick={handleOpen}
      >
        Edit Job
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          Hey, here you can edit the job!
          <form onSubmit={handleSubmit}>
            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="input"
            />
            <Button type="submit">Apply Changes</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
