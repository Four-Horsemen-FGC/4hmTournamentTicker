import React from "react";
import Clock from "../../components/Clock/Clock.jsx";
import Messages from "../../components/Messages/Messages.jsx";
import { useActiveEventOnce, useEntryOnce } from "../../hooks/index";
import styles from "./FooterContainer.module.css";
import { Box } from "@chakra-ui/react";

const FooterContainer = () => {
  const { messages, location } = useActiveEventOnce() || {};
  const RecentMatchesURL = useEntryOnce("recentMatches") || {};
  return (
    <Box
      bgImage={`url(${RecentMatchesURL})`}
      className={styles.footerContainer}
    >
      <Clock location={location} />
      <Messages messages={messages} />
    </Box>
  );
};

export default FooterContainer;
