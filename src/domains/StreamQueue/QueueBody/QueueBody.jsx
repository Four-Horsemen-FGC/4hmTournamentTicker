import React from 'react';
import { useQuery, gql } from '@apollo/client';
import QueueSet from '../QueueSet/QueueSet';
import styles from './QueueBody.module.css';

// import Top8Match from '../../Top8/Top8Match/Top8Match'

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
              participants{
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

function QueueBody() {
  const { loading, error, data } = useQuery(MATCH_RESULTS, {
    variables: { tourneySlug: 'tournament/4hm-test-tournament'},
  });

  if (loading) return (
    <div className={styles.matchesContainer}>
      <p className={styles.loadingAndError}>Loading ...</p>;
    </div>
  );

  if (error) <p className={styles.loadingAndError}>Error Boi ${error.message}</p>;

  console.log(data.tournament.streamQueue[0].sets);

  const queryResult = data.tournament.streamQueue[0].sets.map(
    (node, idx) => <QueueSet key={idx} node={node} />
  );

  return (
    <div className={styles.QueueBodyFlex}>
        <div className={styles.flex}>
          {queryResult}
        </div>
    </div>
  );

}

export default QueueBody;