import React from "react";
import styles from "./Top8Body.module.css";
import { useQuery, gql } from "@apollo/client";
import { Grid, Box } from "@chakra-ui/react";
// import { createComponents, flattenQueryData } from "./utils";
import TopEightRound from "../TopEightRound";
import { useActiveEventOnce } from "../../../hooks";
import { Spinner, Center } from "@chakra-ui/react";
import { flattenTop8data } from "./utils";

const MATCH_RESULTS = gql`
  query EventSets($eventId: ID!, $page: Int!, $perPage: Int!) {
    event(id: $eventId) {
      id
      name
      phases {
        name
      }
      sets(sortType: MAGIC, page: $page, perPage: $perPage) {
        nodes {
          lPlacement
          wPlacement

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

  // invoke useQuery to ping smash.gg for top8 results
  const { loading, error, data } = useQuery(MATCH_RESULTS, {
    // variables: { eventId: 543159, page: 1, perPage: 15 },
    skip: !eventId,
    variables: { eventId, page: 1, perPage: 30 },
  });

  if (loading || !eventId)
    return (
      <Center h="full" w="full">
        <Spinner />
      </Center>
    );
  if (error)
    <p className={styles.loadingAndError}>Error Boi ${error.message}</p>;

  if (data) {
    // console.log(`data`, data);
    // console.log(flattenTop8data(data));
  }
  let flattenedData = flattenTop8data(data);

  return (
    <div className={styles.flex}>
      <>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {/* <Box w="full" h="100" bg="blue.500" /> */}
          <TopEightRound
            key="Winners Semi-Final"
            data={flattenedData["Winners Semi-Final"]}
          />
          <TopEightRound
            key="Winners Final"
            data={flattenedData["Winners Final"]}
            single={true}
          />
          <TopEightRound
            key="Grand Final"
            data={flattenedData["Grand Final"]}
            single={true}
          />
        </Grid>
        <Box h="100" />
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <TopEightRound
            key="Losers Round"
            data={flattenedData["Losers Round"]}
          />
          <TopEightRound
            key="Losers Quarter-Final"
            data={flattenedData["Losers Quarter-Final"]}
          />
          <TopEightRound
            key="Losers Semi-Final"
            data={flattenedData["Losers Semi-Final"]}
            single={true}
          />
          <TopEightRound
            key="Losers Final"
            data={flattenedData["Losers Final"]}
            single={true}
          />
        </Grid>
      </>
    </div>
  );
};

export default Top8Body;
