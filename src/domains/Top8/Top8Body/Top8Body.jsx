import React from "react";
import styles from "./Top8Body.module.css";
import { useQuery, gql } from "@apollo/client";
import { createComponents, flattenQueryData } from "./utils";
import { useActiveEventOnce } from "../../../hooks";
import { Spinner, Center } from "@chakra-ui/react";

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

// const MATCH_RESULTS = gql`
//   query PhaseQuery($top8Id: ID!) {
//     phase(id: $top8Id) {
//       sets {
//         nodes {
//           fullRoundText
//           identifier
//           slots {
//             entrant {
//               participants {
//                 prefix
//                 gamerTag
//               }
//             }
//             standing {
//               stats {
//                 score {
//                   value
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// 4hm test tournament eventId: 543706
// cloud's eventId: 547481
// frostyFaustings MVC3: 543159

const Top8Body = (props) => {
  const { eventId } = useActiveEventOnce() || {};
  // console.log(`eventId`, eventId);
  // invoke useQuery to ping smash.gg for top8 results
  const { loading, error, data } = useQuery(MATCH_RESULTS, {
    // variables: { eventId: 543159, page: 1, perPage: 15 },
    skip: !eventId,
    variables: { eventId, page: 1, perPage: 15 },
  });

  // console.log({ loading, error, data, called });

  if (loading || !eventId)
    return (
      <Center h="full" w="full">
        <Spinner />
      </Center>
    );
  if (error)
    <p className={styles.loadingAndError}>Error Boi ${error.message}</p>;

  let matchStyles = {
    "Winners Semi-Final": [styles.winnersSemiFinal1, styles.winnersSemiFinal2],
    "Winners Final": [styles.winnersFinal],
    "Grand Final": [styles.grandFinal],
    "Grand Final Reset": [styles.grandFinal],
    "Losers Round": [styles.losersRound1, styles.losersRound2],
    "Losers Quarter-Final": [
      styles.losersQuarterFinal1,
      styles.losersQuarterFinal2,
    ],
    "Losers Semi-Final": [styles.losersSemiFinal],
    "Losers Final": [styles.losersFinal],
  };

  // console.log(`data`, data);

  // console.log(data?.event.sets.nodes);
  const games = flattenQueryData(data?.event.sets.nodes)
    // .filter((game) => game.p1Name !== null || game.p2Name !== null)
    .sort((gameA, gameB) => gameA.id.localeCompare(gameB.id));

  let winnersGames = games.filter(
    (game) => !game.matchName.includes("Losers") && matchStyles[game.matchName]
  );
  let losersGames = games.filter((game) => game.matchName.includes("Losers"));
  let losersRoundName = losersGames
    .filter((game) => game.matchName.includes("Losers Round"))
    .pop().matchName;

  losersGames = losersGames.filter((game) => {
    return (
      !game.matchName.includes("Losers Round") ||
      game.matchName === losersRoundName
    );
  });

  matchStyles[losersRoundName] = matchStyles["Losers Round"];

  let lastWinnersMatch = winnersGames[winnersGames.length - 1];
  // console.log(`lastWinnersMatch`, lastWinnersMatch);
  if (
    lastWinnersMatch?.matchName === "Grand Final Reset" &&
    lastWinnersMatch?.p1Name !== "TBD" &&
    lastWinnersMatch?.p2Name !== "TBD"
  ) {
    winnersGames = winnersGames.filter(
      (game) => game.matchName !== "Grand Final"
    );
  } else if (lastWinnersMatch?.matchName === "Grand Final Reset") {
    winnersGames.pop();
  }

  const winnersMatches = winnersGames.map((game) => {
    return { game, style: matchStyles[game.matchName].shift() };
  });
  const losersMatches = losersGames.map((game) => {
    // if (game.matchName.includes("Losers Round")) {

    // }
    return { game, style: matchStyles[game.matchName].shift() };
  });

  // console.log(losersMatches);

  let seen = {};
  winnersMatches.forEach((match) => {
    if (seen[match.game.matchName]) {
      match.game.matchName = null;
    } else {
      seen[match.game.matchName] = true;
    }
  });
  losersMatches.forEach((match) => {
    if (seen[match.game.matchName]) {
      match.game.matchName = null;
    } else {
      seen[match.game.matchName] = true;
    }
  });
  // console.log(`seen`, seen);

  return (
    <div className={styles.flex}>
      <div className={styles.winnerBracket}>
        <div className={styles.grid}>{createComponents(winnersMatches)}</div>
      </div>

      <div className={styles.loserBracket}>
        <div className={styles.gridLoser}>
          {createComponents(losersMatches)}
        </div>
      </div>
    </div>
  );
};

export default Top8Body;
