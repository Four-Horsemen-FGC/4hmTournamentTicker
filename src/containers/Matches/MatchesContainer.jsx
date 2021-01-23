import React from "react";
import SetContainer from "../SetContainer/SetContainer";
import { useQuery, gql } from "@apollo/client";
import styles from "./MatchesContainer.module.css";

const MATCH_RESULTS = gql`
  query EventSets($eventId: ID!, $page: Int!, $perPage: Int!) {
    event(id: $eventId) {
      id
      name
      sets(filters: { state: 3 }, page: $page, perPage: $perPage) {
        nodes {
          identifier
          slots {
            entrant {
              participants {
                prefix
                gamerTag
              }
            }
            standing {
              stats {
                score {
                  value
                }
              }
            }
          }
        }
      }
    }
  }
`;

function MatchesContainer() {
  const { loading, error, data } = useQuery(MATCH_RESULTS, {
    variables: { eventId: 547481, page: 1, perPage: 8 },
  });

  //547481

  if (loading)
    return (
      <div className={styles.matchesContainer}>
        <p className={styles.loadingAndError}>Loading ...</p>;
      </div>
    );

  if (error)
    <p className={styles.loadingAndError}>Error Boi ${error.message}</p>;

  const queryResult = data.event.sets.nodes.map((node, idx) => (
    <SetContainer key={idx} node={node} />
  ));

  return (
    <div className={styles.matchesContainer}>
      <div className={styles.matchesGrid}>{queryResult}</div>
    </div>
  );
}

export default MatchesContainer;
