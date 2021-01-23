import React from "react";
import HeaderContainer from "../Header/HeaderContainer.jsx";
import MatchesContainer from "../Matches/MatchesContainer.jsx";
import FooterContainer from "../Footer/FooterContainer.jsx";

import styles from "./MainContainer.module.css";

const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <HeaderContainer heading="Latest Results" />
      <MatchesContainer />
      <FooterContainer />
    </div>
  );
};

export default MainContainer;
