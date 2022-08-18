import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import { FC, useState } from "react";

export type OnboardingModalProps = {};

export const OnboardingModal: FC<OnboardingModalProps> = () => {
  const [showModal, setShowModal] = useState<boolean>(true);
  return (
    <Dialog
      open={showModal}
      onClose={() => setShowModal(false)}
      PaperComponent={Paper}
      aria-labelledby="confirmation-title"
    >
      <DialogTitle id="confirmation-title">
        Are you sure you wish to continue?
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis
          pulvinar turpis, nec vehicula lorem bibendum quis. Suspendisse
          potenti. Quisque ut nisi tempus, commodo neque ut, ullamcorper ex.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={() => setShowModal(false)}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => setShowModal(false)}
          autoFocus
        >
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
};
