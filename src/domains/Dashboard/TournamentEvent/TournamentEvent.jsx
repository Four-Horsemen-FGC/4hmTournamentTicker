import React from "react";
import styles from "./TournamentEvent.module.css";

const TournamentEvent = ({ id, name, top8Id, onClick }) => {
  return (
    <div>
      <button
        className={styles.eventButton}
        // onClick={() => console.log(`id: ${id}, top8Id: ${top8Id}`)}
        onClick={() => onClick()}
      >
        {name}
      </button>
      {/* <h3 className={styles.eventh2}>id: {id}</h3>
      <h3 className={styles.eventh2}>top8Id: {top8Id}</h3> */}
    </div>
  );
};

export default TournamentEvent;
