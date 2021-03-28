import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import TournamentEvent from "./TournamentEvent/TournamentEvent";
import CreateTickerModal from "./CreateTickerModal/CreateTickerModal";
import { useLazyQuery, gql } from "@apollo/client";

const TOURNAMENT_EVENTS = gql`
  query getTournamentEvents($tourneySlug: String!) {
    tournament(slug: $tourneySlug) {
      city
      name
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
  const [tournamentName, setTournamentName] = useState("");
  const [getEventsQuery, { loading, data }] = useLazyQuery(TOURNAMENT_EVENTS, {
    variables: { tourneySlug: slugifyTournamentName(tournamentName) },
  });
  const [dbPayload, setDbPayload] = useState({
    tournamentName: null,
    location: null,
    eventName: null,
    eventId: null,
    top8Id: null,
    messages: [],
  });

  const createTournamentEvents = (queryData) => {
    let tournament = queryData.name;
    let location = queryData.city ?? "online";
    let events = queryData.events;

    return events.map((element) => {
      let top8Id = element.phases[element.phases.length - 1].id;
      return (
        <TournamentEvent
          key={element.id}
          id={element.id}
          name={element.name}
          top8Id={top8Id}
          onClick={() => {
            setDbPayload({
              ...dbPayload,
              tournamentName: tournament,
              location: location,
              eventName: element.name,
              eventId: element.id,
              top8Id: top8Id,
            });
          }}
        />
      );
    });
  };

  console.log(`tournamentName: ${tournamentName}`);
  console.log(dbPayload);

  return (
    <div className={styles.flex}>
      <div className={styles.flex}>
        <h1 className={styles.titleColor}>Create New Ticker</h1>
        <div>
          <form id="mainForm" className={`${styles.flex} ${styles.form}`}>
            <div className={styles.formFlex}></div>
            <label className={styles.formLabel}>Enter Tournament Name</label>
            <input
              className={styles.input}
              type="text"
              onChange={(e) => setTournamentName(e.target.value)}
              placeholder="Tournament Name"
              id="getTourneyEvents"
            ></input>
          </form>
          <div className={styles.flex}>
            {loading ? (
              <p>getting tournament events... </p>
            ) : data?.tournament?.events ? (
              createTournamentEvents(data.tournament)
            ) : null}
          </div>
          <div className={styles.flex}>
            <button
              className={styles.getTourneyButton}
              onClick={() => {
                getEventsQuery();
              }}
            >
              Get events
            </button>
          </div>
          <form id="mainForm" className={`${styles.flex} ${styles.form}`}>
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
          <CreateTickerModal />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// const getTournamentEvents = () => {
//   let slug = document.getElementById("getTourneyEvents");
//   let formattedSlug = slugifyTournamentName(slug.value);

//   getEventsQuery({ variables: { tourneySlug: formattedSlug } });

//   if (loading) return <p>loading</p>;
//   if (!called) return console.log("notCalled");

//   let formattedEvents = data.tournament.events.map((element) => {
//     let top8Id = element.phases[element.phases.length - 1].id;
//     return (
//       <div>
//         <TournamentEvent
//           key={element.id}
//           id={element.id}
//           name={element.name}
//           top8Id={top8Id}
//           // clickFunction={() => console.log("suh dud")}
//           clickFunction={() => {
//             setDbPayload({
//               ...dbPayload,
//               tourneyName: formattedSlug,
//               eventName: element.name,
//               eventId: element.id,
//               top8Id: top8Id,
//             });
//           }}
//         />
//       </div>
//     );
//   });
//   return formattedEvents;
// };
