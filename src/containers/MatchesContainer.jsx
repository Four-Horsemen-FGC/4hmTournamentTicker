import React from 'react';
import SetContainer from './SetContainer';
import { useQuery, gql } from '@apollo/client';

import Top8Match from '../components/Top8Match';

const MATCH_RESULTS = gql`
query EventSets($eventId: ID!, $page: Int!, $perPage: Int!) {
  event (id: $eventId) {
    id
    name
    sets (
      filters: {
        state: 3
      }
      page: $page
      perPage: $perPage
    ) {
      nodes {
        identifier
        slots {
          entrant {
            participants{
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

function MatchesContainer() {
  let keygen = 1;
  const { loading, error, data } = useQuery(MATCH_RESULTS, {
    variables: { eventId: 543706, page: 1, perPage: 8 },
  });

  if (loading) return (
    <div className='matchesContainer'>
      <p className='loadingAndError'>Loading ...</p>;
    </div>
  );

  if (error) <p className='loadingAndError'>Error Boi ${error.message}</p>;

  const queryResult = data.event.sets.nodes.map(
    node => <SetContainer key={keygen++} node={node} />
  );


  return (
    <div className='matchesContainer'>
        <div className='matchesGrid'>
          {queryResult}
        </div>
      {/* <Top8Match /> */}
    </div>
  );

}

export default MatchesContainer;