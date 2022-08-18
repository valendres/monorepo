import { FC } from "react";
import { Card } from "@valendres/react-components";
import { Welcome } from "~containers/welcome";

export const SummaryCard: FC = () => (
  <Card headingText="Welcome" headingLevel="h2">
    <Welcome name="Potato" />
  </Card>
);
