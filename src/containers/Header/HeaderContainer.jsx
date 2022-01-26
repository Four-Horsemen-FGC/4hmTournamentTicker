import { Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";
// import Logos from '../../components/Logos/Logos.jsx';
import ChambersLogo from "../../assets/images/Logo_36.svg";
import fortressLogo from "../../assets/images/4HM_fortress_logo_171x144.png";
import typoGraphicLogo from "../../assets/images/4HM_typographic_logo_283x128.png";

import styles from "./HeaderContainer.module.css";
import { useEntryOnce } from "../../hooks";

const HeaderContainer = (props) => {
  const orgLogoOne = useEntryOnce("orgLogoOne") || -1;
  const orgLogoTwo = useEntryOnce("orgLogoTwo") || -1;
  const eventLogo = useEntryOnce("eventLogo") || -1;

  return (
    <div className={styles.headerContainer}>
      {/* <Logos /> */}
      <div className={styles.space}>
        <div className={styles.logoDiv}>
          <Image
            className={styles.orgLogos}
            src={orgLogoOne !== -1 ? orgLogoOne : typoGraphicLogo}
            alt="typgraphicLogo"
          ></Image>
        </div>
        <div className={styles.logoDiv}>
          <Image
            className={styles.orgLogos}
            src={orgLogoTwo !== -1 ? orgLogoTwo : fortressLogo}
            alt="fortressLogo"
          ></Image>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.eventLogo}>
          <Image
            src={eventLogo !== -1 ? eventLogo : ChambersLogo}
            alt="eventLogo"
          />
        </div>
      </div>
      <div className={styles.flex}>
        <Heading
          fontSize={{
            sm: "16px",
            md: "24px",
            lg: "36px",
            xl: "52px",
            "2xl": "85px",
            "3xl": "100px",
          }}
          alignSelf="center"
        >
          {props.heading}
        </Heading>
      </div>
    </div>
  );
};

export default HeaderContainer;
