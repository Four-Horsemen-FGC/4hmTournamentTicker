import React from "react";
import SetContainer from "../SetContainer/SetContainer";
import { useQuery, gql } from "@apollo/client";
import styles from "./MatchesContainer.module.css";
import { flattenQueryData } from "../../domains/Top8/Top8Body/utils";
import { useActiveEventOnce } from "../../hooks/index";
import { Spinner, Center } from "@chakra-ui/react";
import { useEntryOnce } from "../../hooks/useEntryOnce";
import { Box } from "@chakra-ui/react";
import defaultImage from "../../assets/images/bg_recent_4096x2160.jpg";

const MATCH_RESULTS = gql`
  query EventSets($eventId: ID!, $page: Int!, $perPage: Int!) {
    event(id: $eventId) {
      id
      name
      sets(
        sortType: RECENT
        filters: { state: 3 }
        page: $page
        perPage: $perPage
      ) {
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
// frostyFaustings MVC3: 543159

function MatchesContainer() {
  const { eventId } = useActiveEventOnce() || {};
  const RecentMatchesURL = useEntryOnce("recentMatches") || -1;
  // console.log(`eventId`, eventId);
  // console.log(`RecentMatchesURL`, RecentMatchesURL);
  const { loading, error, data } = useQuery(MATCH_RESULTS, {
    skip: !eventId,
    variables: { eventId, page: 1, perPage: 8 },
  });

  if (loading || !eventId || !RecentMatchesURL)
    return (
      <Center h="full" w="full">
        <Spinner />
      </Center>
    );

  if (error)
    <p className={styles.loadingAndError}>Error Boi ${error.message}</p>;

  // console.log(`data`, data);

  const queryResult = flattenQueryData(data?.event?.sets.nodes)
    // .sort((gameA, gameB) => gameA.id.localeCompare(gameB.id))
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
    <Box
      bgImage={
        RecentMatchesURL === -1
          ? `url(${defaultImage})`
          : `url(${RecentMatchesURL})`
      }
      className={styles.matchesContainer}
    >
      <Box className={styles.matchesGrid}>{queryResult}</Box>
    </Box>
  );
}

export default MatchesContainer;
