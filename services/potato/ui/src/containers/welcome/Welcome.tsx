import { trpc } from "~utils/trpc";
import { FC } from "react";

export const Welcome: FC = () => {
  const greeting = trpc.proxy.user.greeting.useQuery({ name: "Potato" });

  if (!greeting.data) {
    return <div>Loading...</div>;
  }

  return <span>{greeting.data}</span>;
};
