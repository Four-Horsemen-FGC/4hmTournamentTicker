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

  let matchStyles = {
    'Winners Semi-Final': [styles.winnersSemiFinal1, styles.winnersSemiFinal2],
    'Winners Final': [styles.winnersFinal],
    'Grand Final': [styles.grandFinal],
    'Grand Final Reset': [styles.grandFinal],
    'Losers Round': [styles.losersRound1, styles.losersRound2],
    'Losers Quarter-Final': [styles.losersQuarterFinal1, styles.losersQuarterFinal2],
    'Losers Semi-Final': [styles.losersSemiFinal],
    'Losers Final': [styles.losersFinal]
  };

  const games = flattenQueryData(data.event.sets.nodes)
  .filter(game => game.p1Name !== null || game.p2Name !== null)
  .sort((gameA, gameB) =>
    gameA.id.localeCompare(gameB.id)
  );

  let winnersGames = games.filter((game) => !game.matchName.includes("Losers") && matchStyles[game.matchName]);
  let losersGames = games.filter((game) => game.matchName.includes("Losers"));
  let losersRoundName = losersGames.filter(game => game.matchName.includes('Losers Round')).pop().matchName;
  losersGames = losersGames.filter(game => {
    return !game.matchName.includes('Losers Round') || game.matchName === losersRoundName;
  });
  matchStyles[losersRoundName] = matchStyles['Losers Round'];

  if (winnersGames[winnersGames.length - 1].matchName === 'Grand Final Reset') {
    winnersGames = winnersGames.filter(game => game.matchName !== 'Grand Final');
  }

  const winnersMatches = winnersGames.map((game) => {
    return { game, style: matchStyles[game.matchName].shift() };
  });
  const losersMatches = losersGames.map((game) => {
    return { game, style: matchStyles[game.matchName].shift() };
  });

  let seen = {};
  winnersMatches.forEach(match => {
    if (seen[match.game.matchName]) {
      match.game.matchName = null;
    } else {
      seen[match.game.matchName] = true;
    }
  });
  losersMatches.forEach(match => {
    if (seen[match.game.matchName]) {
      match.game.matchName = null;
    } else {
      seen[match.game.matchName] = true;
    }
  });

  return (
    <div className={styles.flex}>
      <div className={styles.winnerBracket}>
        <div className={styles.grid}>{createComponents(winnersMatches)}</div>
      </div>

      <div className={styles.loserBracket}>
        <div className={styles.gridLoser}>{createComponents(losersMatches)}</div>
      </div>
    </div>
  );
};

export default Top8Body;
