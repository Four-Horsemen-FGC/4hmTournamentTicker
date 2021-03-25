import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import TournamentEvent from "./TournamentEvent/TournamentEvent";
import { useLazyQuery, gql } from "@apollo/client";

const TOURNAMENT_EVENTS = gql`
  query getTournamentEvents($tourneySlug: String!) {
    tournament(slug: $tourneySlug) {
      events {
        id
        name
        phases {
          id
          name
        }
      }
    }
  }
`;

//Frosty Fasutings 2021: Frosty Faustings XIII 2021 - Online

// take tournament name and format it for graphql query
const slugifyTournamentName = (TourneyName) => {
  return TourneyName.replace(/(\s|-)+/g, "-").toLowerCase();
};

const Dashboard = () => {
  const [dbPayload, setDbPayload] = useState({
    tourneyName: null,
    location: null,
    eventName: null,
    eventId: null,
    top8Id: null,
    messages: [],
  });

  console.log(dbPayload);

  const [tournamentEvents, setTournamentEvents] = useState([]);
  const [getEventsQuery, { called, loading, data }] = useLazyQuery(
    TOURNAMENT_EVENTS
  );

  const getTournamentEvents = () => {
    let slug = document.getElementById("getTourneyEvents");
    let formattedSlug = slugifyTournamentName(slug.value);

    getEventsQuery({ variables: { tourneySlug: formattedSlug } });

    if (loading) return <p>loading</p>;
    if (!called) return;

    let formattedEvents = data.tournament.events.map((element, idx) => {
      let top8Id = element.phases[element.phases.length - 1].id;
      return (
        <div>
          <TournamentEvent
            id={element.id}
            name={element.name}
            top8Id={top8Id}
            onClick={() => {
              setDbPayload({
                ...dbPayload,
                tourneyName: formattedSlug,
                eventName: element.name,
                eventId: element.id,
                top8Id: top8Id,
              });
            }}
          />
        </div>
      );
    });
    return formattedEvents;
  };

  return (
    <div className={styles.flex}>
      <div className={styles.flex}>
        <h1 className={styles.titleColor}>suh dud</h1>
        <div>
          <form id="mainForm" className={`${styles.flex} ${styles.form}`}>
            <div className={styles.formFlex}></div>
            <label className={styles.formLabel}>Enter Tournament Name</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Tournament Name"
              id="getTourneyEvents"
            ></input>
          </form>
          <div className={styles.flex}>{tournamentEvents}</div>
          <div className={styles.flex}>
            <button
              className={styles.getTourneyButton}
              onClick={() => setTournamentEvents(getTournamentEvents())}
            >
              Get events
            </button>
          </div>

          <form id="mainForm" className={`${styles.flex} ${styles.form}`}>
            <label className={styles.formLabel}>Tournament Location</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Location (city/state)"
            ></input>
            <label className={styles.formLabel}>Scrolling Messages</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Add Message"
            ></input>
            <input
              className={styles.input}
              type="text"
              placeholder="Add Message"
            ></input>
            <input
              className={styles.input}
              type="text"
              placeholder="Add Message"
            ></input>
            <input
              className={styles.input}
              type="text"
              placeholder="Add Message"
            ></input>
            <input
              className={styles.input}
              type="text"
              placeholder="Add Message"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// const createMessage = (message = undefined) => {
//   if (message === undefined) return;
//   let form = document.getElementById("messagesForm");
//   let count = form.children.length;
//   let input = document.createElement("input");
//   input.id = `message${count}`;
//   input.placeholder = "Enter Message";
//   input.maxLength = 50;

//   let deleteButton = document.createElement("button");
//   deleteButton.className = "del";
//   deleteButton.innerText = "X";
//   deleteButton.addEventListener("click", () => {
//     let messageToDelete = input.id;
//     form.removeChild(messageToDelete);
//   });

//   form.appendChild(input);
//   form.appendChild(deleteButton);
// };
