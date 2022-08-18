import { FC } from "react";
import { Card } from "@valendres/react-components";
import { trpc } from "~utils/trpc";

export const SummaryCard: FC = () => {
  const profile = trpc.proxy.user.profile.useQuery({ id: "fake" });
  return (
    <Card headingText={profile.data?.fullName ?? ""} headingLevel="h2">
      {profile.data?.tagLine ?? ""}
    </Card>
  );
};
