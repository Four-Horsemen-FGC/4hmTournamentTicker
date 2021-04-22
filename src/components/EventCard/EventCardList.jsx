import React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { HStack } from "@chakra-ui/layout";
import firebase from "firebase/app";

import EventCard from "./index";

import { db } from "../../index";

const EventCardList = ({ events, ...props }) => {
  const [user] = useAuthState(firebase.auth());
  const [userDoc] = useDocument(db.doc(`users/${user.uid}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const activeEventId = userDoc?.data().activeEvent.eventId;

  return (
    <HStack padding="3" spacing="5">
      {events.map((event) => (
        <EventCard
          key={event.eventId}
          userId={user.uid}
          isActive={activeEventId === event.eventId}
          {...event}
        />
      ))}
    </HStack>
  );
};

export default EventCardList;
