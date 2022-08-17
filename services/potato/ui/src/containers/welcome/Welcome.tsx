import { trpc } from "~utils/trpc";
import { FC } from "react";

export type WelcomeProps = {
  name: string;
};

export const Welcome: FC<WelcomeProps> = ({ name }) => {
  const greeting = trpc.proxy.user.greeting.useQuery({ name });

  if (!greeting.data) {
    return <div>Loading...</div>;
  }

  return <span>{greeting.data}</span>;
};
