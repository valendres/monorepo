import { FC } from "react";
import { Welcome } from "~containers/welcome";

import logo from "./logo.svg";
import * as styles from "./MainRoot.styles";

export const MainRoot: FC = () => (
  <div css={styles.app}>
    <header css={styles.header}>
      <img css={styles.logo} src={logo} alt="logo" />
      <h3>
        <Welcome name="Eggplant" />
      </h3>
    </header>
  </div>
);
