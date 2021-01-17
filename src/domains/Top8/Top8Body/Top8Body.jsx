import React from 'react';
import styles from './Top8Body.module.css';

import Top8Match from '../Top8Match/Top8Match';

const Top8Body = () => {
  return(
    <div className={styles.flex}>
      <div className={styles.winnerBracket}>
        <div className={styles.grid}>   
          <div className={styles.winner1}>
            <Top8Match name='prop1' tag={'Semi Final'}/>
          </div>
          <div className={styles.winner2}>
            <Top8Match name='prop2'/>
          </div>
          <div className={styles.winner3}>
            <Top8Match name='prop3' tag={'Winner Final'}/>
          </div>
          <div className={styles.winner4}>
            <Top8Match name='prop4' tag={'Grand Final'}/>
          </div>
        </div>
      </div>

      <div className={styles.loserBracket}>
        <div className={styles.gridLoser}>   
          <div className={styles.loser1}>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top8Body;