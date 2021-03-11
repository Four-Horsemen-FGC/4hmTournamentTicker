import React from "react";
import { useQuery, gql } from "@apollo/client";
import QueueSet from "../QueueSet/QueueSet";
import styles from "./QueueBody.module.css";

const MATCH_RESULTS = gql`
  query StreamQueueOnTournament($tourneySlug: String!) {
    tournament(slug: $tourneySlug) {
      id
      streamQueue {
        stream {
          streamSource
          streamName
        }
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

//"tournament/4hm-test-tournament"
//"tournament/the-cloud-series-east-1"
// frosty faustings: frosty-faustings-xiii-2021-online

function QueueBody() {
  const { loading, error, data } = useQuery(MATCH_RESULTS, {
    variables: { tourneySlug: "frosty-faustings-xiii-2021-online" },
  });

  if (loading) {
    console.log("fetching data from smash.gg ... hang about boi");
    return <p>loading...</p>;
  }

  if (error) {
    console.log(`error occured. RiP in Peppercinis. error: ${error}`);
    return <p>an error has occured, please try again.</p>;
  }

  const upcomingMatches = flattenQuery(
    data.tournament?.streamQueue?.[0].sets ?? []
  )
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
    <div className={styles.QueueBodyFlex}>
      <div className={styles.flex}>
        {!upcomingMatches.length ? noUpcomingMatches : upcomingMatches}
      </div>
    </div>
  );
}

export default QueueBody;
