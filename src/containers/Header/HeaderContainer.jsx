import { Heading } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
// import Logos from '../../components/Logos/Logos.jsx';
// import eventLogo from '../../assets/images/Logo_36.svg';
import eventLogo from "../../assets/images/36logo_408x165.png";

import fortressLogo from "../../assets/images/4HM_fortress_logo_171x144.png";
// import typoGraphicLogo from "../../assets/images/4HM_typographic_logo_283x128.png";

import styles from "./HeaderContainer.module.css";
import { storage } from "../..";

const HeaderContainer = (props) => {
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const getLogos = async () => {
      let storageRef = await storage.ref();
      let newLogo = await storageRef.child("Asset 6.png").getDownloadURL();
      setLogo(newLogo);
    };
    getLogos();
  }, []);
  return (
    <div className={styles.headerContainer}>
      {/* <Logos /> */}
      <div className={styles.space}>
        <div className={styles.logoDiv}>
          <img
            className={styles.orgLogos}
            src={logo}
            alt="typgraphicLogo"
          ></img>
        </div>
        <div className={styles.logoDiv}>
          <img
            className={styles.orgLogos}
            src={fortressLogo}
            alt="fortressLogo"
          ></img>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.eventLogo}>
          <img src={eventLogo} alt="eventLogo" />
        </div>
      </div>
      <div className={styles.flex}>
        <Heading size="3xl" alignSelf="center">
          {props.heading}
        </Heading>
      </div>
    </div>
  );
};

export default HeaderContainer;
