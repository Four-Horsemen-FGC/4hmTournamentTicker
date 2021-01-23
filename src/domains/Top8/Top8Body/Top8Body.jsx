import React from "react";
import styles from "./Top8Body.module.css";
import { useQuery, gql } from "@apollo/client";
import { createComponents, flattenQueryData } from "./utils";

const MATCH_RESULTS = gql`
  query EventSets($eventId: ID!, $page: Int!, $perPage: Int!) {
    event(id: $eventId) {
      id
      name
      sets(sortType: MAGIC, page: $page, perPage: $perPage) {
        nodes {
          fullRoundText
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

const winnersStyles = [
  styles.winner1,
  styles.winner2,
  styles.winner3,
  styles.winner4,
];
const losersStyles = [
  styles.loser1,
  styles.loser2,
  styles.loser3,
  styles.loser4,
  styles.loser5,
  styles.loser6,
];

const Top8Body = (props) => {
  // invoke useQuery to ping smash.gg for top8 results
  const { loading, error, data } = useQuery(MATCH_RESULTS, {
    variables: { eventId: 547481, page: 1, perPage: 15 },
  });

  // 543706

  if (loading)
    return (
      <div className={styles.matchesContainer}>
        <p className={styles.loadingAndError}>Loading ...</p>;
      </div>
    );
  if (error)
    <p className={styles.loadingAndError}>Error Boi ${error.message}</p>;

  const games = flattenQueryData(data.event.sets.nodes).sort((gameA, gameB) =>
    gameA.id.localeCompare(gameB.id)
  );

  let winnersGames = games.filter((game) => !game.matchName.includes("Losers"));
  let losersGames = games.filter((game) => game.matchName.includes("Losers"));

  if (
    winnersGames[winnersGames.length - 1].p1Name === "TBD" &&
    winnersGames[winnersGames.length - 1].p2Name === "TBD"
  ) {
    winnersGames.pop();
  }

  let seen = {};
  let index = 0;

  winnersGames = winnersGames.map((game) => {
    if (seen[game.matchName]) {
      game.matchName = null;
    } else {
      seen[game.matchName] = true;
    }
    let winnersGame = { game, style: winnersStyles[index] };
    index = index < winnersStyles.length - 1 ? index + 1 : index;
    return winnersGame;
  });

  index = 0;
  losersGames = losersGames.map((game) => {
    if (seen[game.matchName]) {
      game.matchName = null;
    } else {
      seen[game.matchName] = true;
    }
    let losersGame = { game, style: losersStyles[index] };
    index = index < losersStyles.length - 1 ? index + 1 : index;
    return losersGame;
  });

  return (
    <div className={styles.flex}>
      <div className={styles.winnerBracket}>
        <div className={styles.grid}>{createComponents(winnersGames)}</div>
      </div>

      <div className={styles.loserBracket}>
        <div className={styles.gridLoser}>{createComponents(losersGames)}</div>
      </div>
    </div>
  );
};

export default Top8Body;
