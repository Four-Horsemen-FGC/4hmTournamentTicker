import React from "react";
import styles from "./Top8Body.module.css";
import { useQuery, gql } from "@apollo/client";
import { Grid, Box } from "@chakra-ui/react";
import TopEightRound from "../TopEightRound";
import { useActiveEventOnce, useEntryOnce } from "../../../hooks";
import { Spinner, Center } from "@chakra-ui/react";
import { flattenTop8data } from "./utils";
import defaultImage from "../../../assets/images/bg_top8_4096x2160.jpg";

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

const Top8Body = (props) => {
  const { eventId } = useActiveEventOnce() || {};
  const topEightURL = useEntryOnce("topEight") || -1;

  // invoke useQuery to ping smash.gg for top8 results
  const { loading, error, data } = useQuery(MATCH_RESULTS, {
    skip: !eventId,
    variables: { eventId, page: 1, perPage: 17 },
  });

  if (loading || !eventId)
    return (
      <Center h="full" w="full">
        <Spinner />
      </Center>
    );
  if (error)
    <p className={styles.loadingAndError}>Error Boi ${error.message}</p>;

  let flattenedData = flattenTop8data(data);

  return (
    <Box
      bgImage={
        topEightURL === -1 ? `url(${defaultImage})` : `url(${topEightURL})`
      }
      className={styles.flex}
    >
      <>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
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
    </Box>
  );
};

export default Top8Body;
