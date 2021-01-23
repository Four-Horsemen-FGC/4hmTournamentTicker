import React from "react";
import Top8Match from "../Top8Match/Top8Match";

export const flattenQueryData = (data) => {
  return data.map((object) => {
    return {
      id: object.identifier,
      matchName: object.fullRoundText,
      p1Org: object.slots[0].entrant?.participants[0].prefix ?? null,
      p2Org: object.slots[1].entrant?.participants[0].prefix ?? null,
      p1Name: object.slots[0].entrant?.participants[0].gamerTag ?? "TBD",
      p2Name: object.slots[1].entrant?.participants[0].gamerTag ?? "TBD",
      p1Score: object.slots[0].standing?.stats.score.value ?? 0,
      p2Score: object.slots[1].standing?.stats.score.value ?? 0,
    };
  });
};

export const createComponents = (games) => {
  return games.map((match) => (
    <div className={match.style}>
      <Top8Match
        key={match.id}
        p1Org={match.game.p1Org}
        p2Org={match.game.p2Org}
        p1Name={match.game.p1Name}
        p2Name={match.game.p2Name}
        p1Score={match.game.p1Score}
        p2Score={match.game.p2Score}
        matchName={match.game.matchName}
      />
    </div>
  ));
};
