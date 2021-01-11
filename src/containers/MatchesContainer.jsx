import React, { Component } from 'react';
import style from '../../public/styles.css';
import SetContainer from './SetContainer';
import { useQuery, gql } from '@apollo/client';

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
  const setsArray = [];
  const { loading, error, data } = useQuery(MATCH_RESULTS, {
    variables: { eventId: 543706, page: 1, perPage: 8 },
  });

  if (loading) return (
    <div className='matchesContainer'>
      <p className='loadingAndError'>Loading ...</p>;
    </div>
  );
  if (error) return <p className='loadingAndError'>Error Boi ${error.message}</p>;

  const queryResult = data.event.sets.nodes;

  // console.log(queryResult);

  queryResult.map(node => {
    // console.log(node);
    setsArray.push(<SetContainer key={keygen++} node={node} />);
  });


  return (
    <div className='matchesContainer'>
      {setsArray}
    </div>
  );

}



// class MatchesContainer extends Component {
//   render() {
//     return (
//       <div className='matchesContainer'>
//         <SetContainer />
//       </div>
//     );
//   }
// }



export default MatchesContainer;