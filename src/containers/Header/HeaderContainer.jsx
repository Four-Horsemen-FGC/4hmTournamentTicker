import { Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";
// import Logos from '../../components/Logos/Logos.jsx';
// import eventLogo from '../../assets/images/Logo_36.svg';

// import fortressLogo from "../../assets/images/4HM_fortress_logo_171x144.png";
// import typoGraphicLogo from "../../assets/images/4HM_typographic_logo_283x128.png";

import styles from "./HeaderContainer.module.css";
import { useEntryOnce } from "../../hooks";

const HeaderContainer = (props) => {
  const orgLogoOne = useEntryOnce("orgLogoOne");
  const orgLogoTwo = useEntryOnce("orgLogoTwo");
  const eventLogo = useEntryOnce("eventLogo");

  return (
    <div className={styles.headerContainer}>
      {/* <Logos /> */}
      <div className={styles.space}>
        <div className={styles.logoDiv}>
          <Image
            className={styles.orgLogos}
            src={orgLogoOne}
            alt="typgraphicLogo"
          ></Image>
        </div>
        <div className={styles.logoDiv}>
          <Image
            className={styles.orgLogos}
            src={orgLogoTwo}
            alt="fortressLogo"
          ></Image>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.eventLogo}>
          <Image src={eventLogo} alt="eventLogo" />
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
