import React from "react";
import fortressLogo from "../../assets/images/4HM_fortress_logo_171x144.png";
import typoGraphicLogo from "../../assets/images/4HM_typographic_logo_283x128.png";
import styles from "./Logos.module.css";

const Logos = () => {
  return (
    <div className={styles.logosContainer}>
      <img
        className={styles.headerLogo1}
        src={typoGraphicLogo}
        alt="typgraphicLogo"
      ></img>
      <img
        className={styles.headerLogo2}
        src={fortressLogo}
        alt="fortressLogo"
      ></img>
    </div>
  );
};

export default Logos;
