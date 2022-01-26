import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useActiveEventOnce, useEntryOnce } from "../../../hooks";
import { Spinner, Center, Box } from "@chakra-ui/react";
import QueueSet from "../QueueSet/QueueSet";
import styles from "./QueueBody.module.css";
import defaultImage from "../../../assets/images/bg_comingup_4096x2160.jpg";

const MATCH_RESULTS = gql`
  query StreamQueueOnTournament($tourneyId: ID!) {
    streamQueue(tournamentId: $tourneyId) {
      sets {
        id
        slots {
          entrant {
            participants {
              prefix
              gamerTag
            }
          }
        }
      }
    }
  }
`;

const flattenQuery = (data) => {
  if (data.length === 0) {
    return data;
  } else {
    return data.map((element) => {
      return {
        id: element.id,
        p1Org: element.slots[0].entrant?.participants[0].prefix ?? null,
        p2Org: element.slots[1].entrant?.participants[0].prefix ?? null,
        p1Name: element.slots[0].entrant?.participants[0].gamerTag ?? null,
        p2Name: element.slots[1].entrant?.participants[0].gamerTag ?? null,
      };
    });
  }
};

function QueueBody() {
  const { tournamentId } = useActiveEventOnce() || {};
  const streamQueueURL = useEntryOnce("streamQueue") || -1;

  const { loading, data } = useQuery(MATCH_RESULTS, {
    skip: !tournamentId,
    variables: { tourneyId: tournamentId },
  });

  if (loading || !tournamentId) {
    return (
      <Center h="full" w="full">
        <Spinner />
      </Center>
    );
  }

  console.log(`data`, data?.streamQueue?.[0]?.sets);
  const upcomingMatches = flattenQuery(data?.streamQueue?.[0]?.sets || [])
    .filter((element) => element.p1Name !== null && element.p2Name !== null)
    .map((element) => {
      return (
        <QueueSet
          key={element.id}
          p1Name={element.p1Name}
          p2Name={element.p2Name}
          p1Org={element.p1Org}
          p2Org={element.p2Org}
        />
      );
    });
  const noUpcomingMatches = <h2>No Upcoming Matches :-(</h2>;

  return (
    <Box
      bgImage={
        streamQueueURL === -1
          ? `url(${defaultImage})`
          : `url(${streamQueueURL})`
      }
      className={styles.QueueBodyFlex}
    >
      <div className={styles.flex}>
        {!upcomingMatches.length ? noUpcomingMatches : upcomingMatches}
      </div>
    </Box>
  );
}

export default QueueBody;
