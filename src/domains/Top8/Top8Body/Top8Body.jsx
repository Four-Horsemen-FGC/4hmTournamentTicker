import React from 'react';
import styles from './Top8Body.module.css';
import { useQuery, gql } from '@apollo/client';
import Top8Match from '../Top8Match/Top8Match';

const MATCH_RESULTS = gql`
query EventSets($eventId: ID!, $page: Int!, $perPage: Int!) {
  event (id: $eventId) {
    id
    name
    sets (
    	sortType: MAGIC
      page: $page
      perPage: $perPage
    ) {
      nodes {
        fullRoundText
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

const winnerBracketName = ['Winners Semi-Final', 'Winners Final', 'Grand Final'];
const loserBracketName = ['Losers Round 2', 'Losers Quarter-Final', 'Losers Semi-Final', 'Losers Final'];
const winnerStyles = [styles.winner1, styles.winner2, styles.winner3, styles.winner4];
const loserStyles = [styles.loser1, styles.loser2, styles.loser3, styles.loser4, styles.loser5, styles.loser6];
const winnerBracketArray = [];
const loserBracketArray = [];
const bracketDictionary = {};

const createComponents = (section, style, sectionArray, count = 0) => {
  
  section.forEach((element, outerIdx) => {

    bracketDictionary[element].forEach((innerElement, idx) => {
      let p1Org = innerElement[0].entrant ? innerElement[0].entrant.participants[0] ? innerElement[0].entrant.participants[0].prefix : '' : ''
      let p1Name = innerElement[0].entrant ? innerElement[0].entrant.participants[0] ? innerElement[0].entrant.participants[0].gamerTag : 'TBD' : 'TBD'
      let p1Score = innerElement[0].standing ? innerElement[0].standing.stats.score.value ? innerElement[0].standing.stats.score.value : 0 : 0
      let p2Org = innerElement[1].entrant ? innerElement[1].entrant.participants[0] ? innerElement[1].entrant.participants[0].prefix : '' : ''
      let p2Name = innerElement[1].entrant ? innerElement[1].entrant.participants[0] ? innerElement[1].entrant.participants[0].gamerTag : 'TBD' : 'TBD'
      let p2Score = innerElement[1].standing ? innerElement[1].standing.stats.score.value ? innerElement[1].standing.stats.score.value : 0 : 0
  
      sectionArray.push(
        <div className={style[count]}>  
          <Top8Match 
            key={count++}
            p1Org = {p1Org}
            p2Org = {p2Org}
            p1Name = {p1Name}
            p2Name = {p2Name}  
            p1Score = {p1Score}
            p2Score = {p2Score}
            tag={idx === 0 ? element : null}/>
        </div>
      );
    })
  })
}


const Top8Body = (props) => {
  
  // invoke useQuery to ping smash.gg for top8 results
  const { loading, error, data } = useQuery(MATCH_RESULTS, {
    variables: { eventId: 543706, page: 1, perPage: 11 },
  });
  
  if (loading) return (
    <div className={styles.matchesContainer}>
      <p className={styles.loadingAndError}>Loading ...</p>;
    </div>
  ); 
  if (error) <p className={styles.loadingAndError}>Error Boi ${error.message}</p>;
  
  const queryData = data.event.sets.nodes;
  
  console.log(queryData);
  
  //iterate through array of matches to create a dictionary of sets in top8
  queryData.forEach(element => {
    if (!bracketDictionary[element.fullRoundText])  {
      bracketDictionary[element.fullRoundText] = []
    }
    bracketDictionary[element.fullRoundText].push(element.slots)
  })
  
  //invoke createCompnenents to create an array of Top8Match components for the winner's and loser's brackets
  createComponents(winnerBracketName, winnerStyles, winnerBracketArray);
  createComponents(loserBracketName, loserStyles, loserBracketArray);

  return(
    <div className={styles.flex}>
      <div className={styles.winnerBracket}>
        <div className={styles.grid}>
          {winnerBracketArray}   
        </div>
      </div>

      <div className={styles.loserBracket}>
        <div className={styles.gridLoser}> 
          {loserBracketArray}
        </div>
      </div>
    </div>
  )
}

export default Top8Body;