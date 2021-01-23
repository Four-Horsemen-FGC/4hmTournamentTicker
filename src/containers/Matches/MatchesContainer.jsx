import React from "react";
import SetContainer from "../SetContainer/SetContainer";
import { useQuery, gql } from "@apollo/client";
import styles from "./MatchesContainer.module.css";
import { flattenQueryData } from "../../domains/Top8/Top8Body/utils";

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

// 4hm test tournament eventId: 543706
// cloud's eventId: 547481

function MatchesContainer() {
  const { loading, error, data } = useQuery(MATCH_RESULTS, {
    variables: { eventId: 547481, page: 1, perPage: 8 },
  });

  if (loading)
    return (
      <div className={styles.matchesContainer}>
        <p className={styles.loadingAndError}>Loading ...</p>;
      </div>
    );

  if (error)
    <p className={styles.loadingAndError}>Error Boi ${error.message}</p>;

  const queryResult = flattenQueryData(data.event.sets.nodes)
    .sort((gameA, gameB) => gameA.id.localeCompare(gameB.id))
    .map((element) => {
      return (
        <SetContainer
          key={element.id}
          id={element.id}
          p1Name={element.p1Name}
          p2Name={element.p2Name}
          p1Org={element.p1Org}
          p2Org={element.p2Org}
          p1Score={element.p1Score}
          p2Score={element.p2Score}
        />
      );
    });

  return (
    <div className={styles.matchesContainer}>
      <div className={styles.matchesGrid}>{queryResult}</div>
    </div>
  );
}

export default MatchesContainer;
