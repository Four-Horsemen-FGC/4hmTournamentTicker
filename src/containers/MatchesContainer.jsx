import React, { Component } from 'react';
import style from '../../public/styles.css';
import SetContainer from './SetContainer';

// const url = 'https://api.smash.gg/gql/alpha';
// const query = `
//   query EventSets($eventId: ID!, $page: Int!, $perPage: Int!) {
//     event (id: $eventId) {
//       id
//       name
//       sets (
//         filters: {
//           state: 3
//         }
//         page: $page
//         perPage: $perPage
//       ) {
//         nodes {
//           identifier
//           slots {
//             entrant {
//               name
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

// const variables = {
//   "eventId": 543706,
//   "page": 1,
//   "perPage": 8
// };

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json',
//     "Authorization": `Bearer 8e9426444dca9d12423c7f143474fa75`
//   },
//   body: JSON.stringify({ query, variables })
// };

// async function apiJSON() {
//   await fetch(url, options)
//     .then(res => res.json())
//     .then(result => this.setState({ sets: result }));
// }

class MatchesContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      sets: []
    };
  }

  componentDidMount() {
    // fetch(url, options)
    //   .then(res => res.json())
    //   .then(result => this.setState({ sets: result.data.event.sets.nodes }))
    //   .then(console.log(this.state.sets))
    //   .catch(err => console.log(`error is ${err}`));
  }

  render() {

    return (
      <div className='matchesContainer'>
        <SetContainer />
        <SetContainer />
        <SetContainer />
        <SetContainer />
        <SetContainer />
        <SetContainer />
        <SetContainer />
        <SetContainer />
      </div>
    );
  }
}



export default MatchesContainer;