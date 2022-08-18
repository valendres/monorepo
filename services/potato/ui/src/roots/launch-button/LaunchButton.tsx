import { Button } from "@mui/material";
import { FC, useCallback, useState } from "react";
import { OnboardingModal } from "~containers/onboarding-modal";

export const LaunchButton: FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleButtonClick = useCallback(() => {
    setModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <div>
      <Button onClick={handleButtonClick}>Do something</Button>
      <OnboardingModal open={modalOpen} onClose={handleModalClose} />
    </div>
  );
};
