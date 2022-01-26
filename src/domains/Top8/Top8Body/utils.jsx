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

export const flattenTop8data = (data) => {
  let flattenedData = {
    "Grand Final": [],
    "Winners Final": [],
    "Winners Semi-Final": [],
    "Losers Round": [],
    "Losers Quarter-Final": [],
    "Losers Semi-Final": [],
    "Losers Final": [],
  };

  data?.event?.sets?.nodes.forEach((set) => {
    //conditional that skips the current element if the set isn't relevant to top8
    if (
      !flattenedData[set.fullRoundText] &&
      !set.fullRoundText.includes("Losers Round") &&
      !set.fullRoundText.includes("Grand Final")
    )
      return;

    //conditional that skips the current element if the most relevant Winners Final set has already been pushed to the Winners Final array
    if (
      set.fullRoundText === "Winners Final" &&
      flattenedData["Winners Final"].length === 1
    )
      return;

    //conditional that skips the current element if the most relevant Losers Final set has already been pushed to the Losers Final array
    if (
      set.fullRoundText === "Losers Final" &&
      flattenedData["Losers Final"].length === 1
    )
      return;

    if (set?.lPlacement < 8 && set.fullRoundText.includes("Losers Round")) {
      return flattenedData["Losers Round"].push({
        id: set.identifier,
        matchName: set.fullRoundText,
        p1Org: set.slots[0].entrant?.participants[0].prefix ?? null,
        p2Org: set.slots[1].entrant?.participants[0].prefix ?? null,
        p1Name: set.slots[0].entrant?.participants[0].gamerTag ?? "TBD",
        p2Name: set.slots[1].entrant?.participants[0].gamerTag ?? "TBD",
        p1Score: set.slots[0].standing?.stats.score.value ?? 0,
        p2Score: set.slots[1].standing?.stats.score.value ?? 0,
      });
    }
    if (set?.lPlacement < 8 && set.fullRoundText.includes("Grand Final")) {
      return flattenedData["Grand Final"].push({
        id: set.identifier,
        matchName: set.fullRoundText,
        p1Org: set.slots[0].entrant?.participants[0].prefix ?? null,
        p2Org: set.slots[1].entrant?.participants[0].prefix ?? null,
        p1Name: set.slots[0].entrant?.participants[0].gamerTag ?? "TBD",
        p2Name: set.slots[1].entrant?.participants[0].gamerTag ?? "TBD",
        p1Score: set.slots[0].standing?.stats.score.value ?? 0,
        p2Score: set.slots[1].standing?.stats.score.value ?? 0,
      });
    } else if (set?.lPlacement < 8) {
      return flattenedData[set.fullRoundText].push({
        id: set.identifier,
        matchName: set.fullRoundText,
        p1Org: set.slots[0].entrant?.participants[0].prefix ?? null,
        p2Org: set.slots[1].entrant?.participants[0].prefix ?? null,
        p1Name: set.slots[0].entrant?.participants[0].gamerTag ?? "TBD",
        p2Name: set.slots[1].entrant?.participants[0].gamerTag ?? "TBD",
        p1Score: set.slots[0].standing?.stats.score.value ?? 0,
        p2Score: set.slots[1].standing?.stats.score.value ?? 0,
      });
    }
  });

  return flattenedData;
};

export const createComponents = (games) => {
  return games.map((match, idx) => (
    <div className={match.style}>
      <Top8Match
        key={`${match.id}-${idx}`}
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

export const concatName = (element, size = 4) => {
  return element && element.length > size
    ? element.slice(0, size) + "..."
    : element;
};

export const parseScore = (score) => {
  return score < 0 ? "D" : score;
};
