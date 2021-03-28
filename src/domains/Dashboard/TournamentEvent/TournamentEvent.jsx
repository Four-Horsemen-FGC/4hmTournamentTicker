import React from "react";
import { useRadio, useRadioGroup } from "@chakra-ui/react";
import styles from "./TournamentEvent.module.css";

const TournamentEvent = ({ id, name, top8Id, onClick }) => {
  return (
    <div>
      <button className={styles.eventButton} onClick={() => onClick()}>
        {name}
      </button>
    </div>
  );
};

export default TournamentEvent;
