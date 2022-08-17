import {
  defineReactMicroFrontend,
  ReactMicroFrontendConfig,
} from "@valendres/react-micro-frontend";
import { RootProvider } from "~containers/root-provider";
import { Main } from "~roots/main";
import { Card } from "~roots/card";
import styles from "./styles.scss";

const config: ReactMicroFrontendConfig = {
  shadow: true,
  styles: [styles],
  fonts: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
    },
  ],
};

defineReactMicroFrontend(
  "potato-main",
  (_, element) => {
    return (
      <RootProvider container={element.dynamicRoot}>
        <Main />
      </RootProvider>
    );
  },
  config
);

defineReactMicroFrontend(
  "potato-card",
  (_, element) => {
    return (
      <RootProvider container={element.dynamicRoot}>
        <Card />
      </RootProvider>
    );
  },
  config
);
