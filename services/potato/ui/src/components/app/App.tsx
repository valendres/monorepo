import logo from "./logo.svg";
import * as styles from "./App.css";
import { FC } from "react";

export const App: FC = () => (
  <div className={styles.app}>
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h3>Welcome to React!</h3>
    </header>
  </div>
);
