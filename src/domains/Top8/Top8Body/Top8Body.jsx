import React from 'react';
import styles from './Top8Body.module.css';

import Top8Match from '../Top8Match/Top8Match';

const datum = [
  {
    "fullRoundText": "Losers Quarter-Final",
    "identifier": "Q",
    "slots": [
      {
        "entrant": {
          "participants": [
            {
              "prefix": "SPC",
              "gamerTag": "Beam Cannon"
            }
          ]
        },
        "standing": {
          "stats": {
            "score": {
              "value": null
            }
          }
        }
      },
      {
        "entrant": {
          "participants": [
            {
              "prefix": "4HM",
              "gamerTag": "Death Beam"
            }
          ]
        },
        "standing": {
          "stats": {
            "score": {
              "value": null
            }
          }
        }
      }
    ]
  },
  {
    "fullRoundText": "Losers Semi-Final",
    "identifier": "R",
    "slots": [
      {
        "entrant": {
          "participants": [
            {
              "prefix": "",
              "gamerTag": "Tri-Beam"
            }
          ]
        },
        "standing": {
          "stats": {
            "score": {
              "value": null
            }
          }
        }
      },
      {
        "entrant": null,
        "standing": null
      }
    ]
  },
  {
    "fullRoundText": "Losers Final",
    "identifier": "S",
    "slots": [
      {
        "entrant": null,
        "standing": null
      },
      {
        "entrant": null,
        "standing": null
      }
    ]
  },
  {
    "fullRoundText": "Winners Final",
    "identifier": "I",
    "slots": [
      {
        "entrant": {
          "participants": [
            {
              "prefix": "",
              "gamerTag": "Big Bang Kamehameha"
            }
          ]
        },
        "standing": {
          "stats": {
            "score": {
              "value": null
            }
          }
        }
      },
      {
        "entrant": {
          "participants": [
            {
              "prefix": "",
              "gamerTag": "Spirit Bomb"
            }
          ]
        },
        "standing": {
          "stats": {
            "score": {
              "value": null
            }
          }
        }
      }
    ]
  },
  {
    "fullRoundText": "Grand Final",
    "identifier": "J",
    "slots": [
      {
        "entrant": null,
        "standing": null
      },
      {
        "entrant": null,
        "standing": null
      }
    ]
  },
  {
    "fullRoundText": "Grand Final Reset",
    "identifier": "K",
    "slots": [
      {
        "entrant": null,
        "standing": null
      },
      {
        "entrant": null,
        "standing": null
      }
    ]
  },
  {
    "fullRoundText": "Winners Semi-Final",
    "identifier": "G",
    "slots": [
      {
        "entrant": {
          "participants": [
            {
              "prefix": "",
              "gamerTag": "Big Bang Kamehameha"
            }
          ]
        },
        "standing": {
          "stats": {
            "score": {
              "value": 2
            }
          }
        }
      },
      {
        "entrant": {
          "participants": [
            {
              "prefix": "",
              "gamerTag": "Tri-Beam"
            }
          ]
        },
        "standing": {
          "stats": {
            "score": {
              "value": 1
            }
          }
        }
      }
    ]
  },
  {
    "fullRoundText": "Winners Semi-Final",
    "identifier": "H",
    "slots": [
      {
        "entrant": {
          "participants": [
            {
              "prefix": "",
              "gamerTag": "Spirit Bomb"
            }
          ]
        },
        "standing": {
          "stats": {
            "score": {
              "value": 2
            }
          }
        }
      },
      {
        "entrant": {
          "participants": [
            {
              "prefix": "SPC",
              "gamerTag": "Beam Cannon"
            }
          ]
        },
        "standing": {
          "stats": {
            "score": {
              "value": 1
            }
          }
        }
      }
    ]
  },
  {
    "fullRoundText": "Losers Quarter-Final",
    "identifier": "P",
    "slots": [
      {
        "entrant": {
          "participants": [
            {
              "prefix": "",
              "gamerTag": "Tri-Beam"
            }
          ]
        },
        "standing": {
          "stats": {
            "score": {
              "value": 2
            }
          }
        }
      },
      {
        "entrant": {
          "participants": [
            {
              "prefix": "",
              "gamerTag": "Dragon Fist"
            }
          ]
        },
        "standing": {
          "stats": {
            "score": {
              "value": 1
            }
          }
        }
      }
    ]
  },
  {
    "fullRoundText": "Losers Round 2",
    "identifier": "N",
    "slots": [
      {
        "entrant": {
          "participants": [
            {
              "prefix": "",
              "gamerTag": "Dragon Fist"
            }
          ]
        },
        "standing": {
          "stats": {
            "score": {
              "value": 2
            }
          }
        }
      },
      {
        "entrant": {
          "participants": [
            {
              "prefix": "",
              "gamerTag": "Candy Beam"
            }
          ]
        },
        "standing": {
          "stats": {
            "score": {
              "value": 1
            }
          }
        }
      }
    ]
  },
  {
    "fullRoundText": "Losers Round 2",
    "identifier": "O",
    "slots": [
      {
        "entrant": {
          "participants": [
            {
              "prefix": "",
              "gamerTag": "Destructo Disk"
            }
          ]
        },
        "standing": {
          "stats": {
            "score": {
              "value": 1
            }
          }
        }
      },
      {
        "entrant": {
          "participants": [
            {
              "prefix": "4HM",
              "gamerTag": "Death Beam"
            }
          ]
        },
        "standing": {
          "stats": {
            "score": {
              "value": 2
            }
          }
        }
      }
    ]
  }
]

const winnersBracketNames = ['Winners Semi-Final', 'Winners Final', 'Grand Final'];
const losersBracketNames = ['Losers Round 2', 'Losers Quarter-Final', 'Losers Semi-Final', 'Losers Final']
const winnersStyles = [styles.winner1, styles.winner2, styles.winner3, styles.winner4];
const losersStyles = [styles.loser1, styles.loser2, styles.loser3, styles.loser4, styles.loser5, styles.loser6];

const games = datum.map(object => {
  return {
    id: object.identifier,
    round: object.fullRoundText,
    p1Org: object.slots[0].entrant ? object.slots[0].entrant.participants[0].prefix : null,
    p2Org: object.slots[1].entrant ? object.slots[1].entrant.participants[0].prefix : null,
    p1Name: object.slots[0].entrant ? object.slots[0].entrant.participants[0].gamerTag : null,
    p2Name: object.slots[1].entrant ? object.slots[1].entrant.participants[0].gamerTag : null,
    p1Score: object.slots[0].standing ? object.slots[0].standing.stats.score.value : null,
    p2Score: object.slots[1].standing ? object.slots[1].standing.stats.score.value : null,
  };
}).sort((gameA, gameB) => gameA.id.localeCompare(gameB.id));

let winnersGames = games.filter(game => !game.round.includes("Losers"))
let losersGames = games.filter(game => game.round.includes("Losers"));

let index = 0;
winnersGames = winnersGames.map(game => {
  let winnersGame = { 'game': game, 'style': winnerStyles[index] }
  index = index < winnerStyles.length - 1 ? index + 1 : index;
  return winnersGame;
});

index = 0;
losersGames = losersGames.map(game => {
  let losersGame = { 'game': game, 'style': loserStyles[index] }
  index = index < loserStyles.length - 1 ? index + 1 : index;
  return losersGame;
});

const winnersBracket = [];
const losersBracket = [];

const createComponents = (games, bracket) => {
  games.forEach(game => {
    bracket.push(
      <div className={style[count++]}>
        <Top8Match
	  key={`${element} ${outerIdx} ${idx}`}
	  p1Org = {p1Org}
	  p2Org = {p2Org}
	  p1Name = {p1Name}
	  p2Name = {p2Name}
	  p1Score = {p1Score}
	  p2Score = {p2Score}
	  tag={idx === 0 ? element : null}/>
      </div>
    );
  });
};

const winnerBracketArray = [];
const loserBracketArray = [];
const bracketDictionary = {}

datum.forEach(element => {
  if (!bracketDictionary[element.fullRoundText])  {
    bracketDictionary[element.fullRoundText] = []
  }
  bracketDictionary[element.fullRoundText].push(element.slots)
})

const createComponents = (section, style, sectionArray, count = 0) => {

  section.forEach((element, outerIdx) => {

    bracketDictionary[element].forEach((innerElement, idx) => {
      let p1Org = innerElement[0].entrant ? innerElement[0].entrant.participants[0] ? innerElement[0].entrant.participants[0].prefix : '' : ''
      let p1Name = innerElement[0].entrant ? innerElement[0].entrant.participants[0] ? innerElement[0].entrant.participants[0].gamerTag : 'TBD' : 'TBD'
      let p1Score = innerElement[0].standing ? innerElement[0].standing.stats.score.value ? innerElement[0].standing.stats.score.value : 0 : 0
      let p2Org = innerElement[1].entrant ? innerElement[1].entrant.participants[0] ? innerElement[1].entrant.participants[0].prefix : '' : ''
      let p2Name = innerElement[1].entrant ? innerElement[1].entrant.participants[0] ? innerElement[1].entrant.participants[0].gamerTag : 'TBD' : 'TBD'
      let p2Score = innerElement[1].standing ? innerElement[1].standing.stats.score.value ? innerElement[1].standing.stats.score.value : 0 : 0

      // console.log(`
      //   player one: ${innerElement[0].entrant ? innerElement[0].entrant.participants[0] ? innerElement[0].entrant.participants[0].gamerTag : 'TBD' : 'TBD'}
      //   player one score: ${innerElement[0].standing ? innerElement[0].standing.stats.score.value ? innerElement[0].standing.stats.score.value : 0 : 0}
      //   player two: ${innerElement[1].entrant ? innerElement[1].entrant.participants[0] ? innerElement[1].entrant.participants[0].gamerTag : 'TBD' : 'TBD'}
      //   player two score: ${innerElement[1].standing ? innerElement[1].standing.stats.score.value ? innerElement[1].standing.stats.score.value : 0 : 0}
      // `);

      sectionArray.push(
        <div className={style[count++]}>
          <Top8Match
            key={`${element} ${outerIdx} ${idx}`}
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

createComponents(winnerBracketNames, winnerStyles, winnerBracketArray);
createComponents(loserBracketNames, loserStyles, loserBracketArray);

// winnerBracketName.forEach((element, outerIdx) => {

//   bracketDictionary[element].forEach((innerElement, idx) => {
//     let p1Org = innerElement[0].entrant ? innerElement[0].entrant.participants[0] ? innerElement[0].entrant.participants[0].prefix : '' : ''
//     let p1Name = innerElement[0].entrant ? innerElement[0].entrant.participants[0] ? innerElement[0].entrant.participants[0].gamerTag : 'TBD' : 'TBD'
//     let p1Score = innerElement[0].standing ? innerElement[0].standing.stats.score.value ? innerElement[0].standing.stats.score.value : 0 : 0
//     let p2Org = innerElement[1].entrant ? innerElement[1].entrant.participants[0] ? innerElement[1].entrant.participants[0].prefix : '' : ''
//     let p2Name = innerElement[1].entrant ? innerElement[1].entrant.participants[0] ? innerElement[1].entrant.participants[0].gamerTag : 'TBD' : 'TBD'
//     let p2Score = innerElement[1].standing ? innerElement[1].standing.stats.score.value ? innerElement[1].standing.stats.score.value : 0 : 0

//     // console.log(`
//     //   player one: ${innerElement[0].entrant ? innerElement[0].entrant.participants[0] ? innerElement[0].entrant.participants[0].gamerTag : 'TBD' : 'TBD'}
//     //   player one score: ${innerElement[0].standing ? innerElement[0].standing.stats.score.value ? innerElement[0].standing.stats.score.value : 0 : 0}
//     //   player two: ${innerElement[1].entrant ? innerElement[1].entrant.participants[0] ? innerElement[1].entrant.participants[0].gamerTag : 'TBD' : 'TBD'}
//     //   player two score: ${innerElement[1].standing ? innerElement[1].standing.stats.score.value ? innerElement[1].standing.stats.score.value : 0 : 0}
//     // `);

//     winnerBracketArray.push(
//       <div className={winnerStyles[winnerCount++]}>
//         <Top8Match
//           key={`${element} ${outerIdx} ${idx}`}
//           p1Org = {p1Org}
//           p2Org = {p2Org}
//           p1Name = {p1Name}
//           p2Name = {p2Name}
//           p1Score = {p1Score}
//           p2Score = {p2Score}
//           tag={idx === 0 ? element : null}/>
//       </div>
//     );

//   })
// })

const Top8Body = (props) => {
  return(
    <div className={styles.flex}>
      <div className={styles.winnerBracket}>
        <div className={styles.grid}>
          {winnerBracketArray}
          {/* <div className={styles.winner1}>

          </div>
          <div className={styles.winner2}>
            <Top8Match name='prop2'/>
          </div>
          <div className={styles.winner3}>
            <Top8Match name='prop3' tag={'Winner Final'}/>
          </div>
          <div className={styles.winner4}>
            <Top8Match name='prop4' tag={'Grand Final'}/>
          </div> */}
        </div>
      </div>

      <div className={styles.loserBracket}>
        <div className={styles.gridLoser}>
          {loserBracketArray}
          {/* <div className={styles.loser1}>
            <Top8Match name='prop1' tag='Round 1'/>
          </div>
          <div className={styles.loser2}>
            <Top8Match name='prop2'/>
          </div>
          <div className={styles.loser3}>
            <Top8Match name='prop3' tag='Quarter Final'/>
          </div>
          <div className={styles.loser4}>
            <Top8Match name='prop4'/>
          </div>
          <div className={styles.loser5}>
            <Top8Match name='prop5' tag='Semi Final'/>
          </div>
          <div className={styles.loser6}>
            <Top8Match name='prop6' tag='Loser Final'/>
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default Top8Body;
