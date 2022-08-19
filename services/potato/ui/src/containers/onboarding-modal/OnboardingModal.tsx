import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from '@mui/material';
import { FC } from 'react';

export type OnboardingModalProps = {
  open: boolean;
  onClose: () => void;
};

export const OnboardingModal: FC<OnboardingModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
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
        <Button variant="text" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={onClose} autoFocus>
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
};
