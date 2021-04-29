import React from "react";
import CreateTickerModal from "./CreateTickerModal/CreateTickerModal";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import {
  Button,
  HStack,
  Text,
  Spacer,
  Image,
  Flex,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../index.js"; // importing firestore instance from index.js. is there a more elegant way to get the database in children components????
import { useHistory } from "react-router-dom";
import { EventCardList } from "../../components/EventCard";
import { DashboardLink } from "../../components/Link";

// MVP
//[X] Create Cards for events created by user
//[X] ability to set an active event that's being tracked
//[X] get views to pull from active event database
//[X] update center logo and background in views to generations league branding
//[X] link to all the views in dashboard
//[X] implement password to be able to sign in
//[] fix multiple renders on page load

// STRETCH GOALS
//[] implement storage bucket for logos and backgrounds
//[X] spruce up loading states with loading icons
//[] implement some league tracking functionality <- omega stretch

// QUESTIONS
//[] write security rules for reading and writing to database?
//[X] host site with firebase?
//[] subscription/unsubscribe metrics?

//----------Bugs---------------
//showstoppers

//minor

const Dashboard = () => {
  // 1. user changes: rerender
  const [user, loading] = useAuthState(firebase.auth());
  const { push } = useHistory();

  const signOut = () => {
    push("/");
    firebase.auth().signOut();
  };

  // 2. user changes: rerender
  //can get the document that has the corresponding userId but having trouble updating document (see CreateTickerModal.jsx)
  const [value] = useDocument(db.doc(`users/${user.uid}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const events = value?.data().events;

  // console.log(`events`, events);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Box backgroundColor="gray.900" height="full" width="full" overflow="auto">
      <HStack px={5} py={5}>
        <Text color={"whiteAlpha.900"} fontSize="3xl">
          Greetings {user?.displayName}
        </Text>
        <Spacer />
        <HStack px={5} py={5} spacing={3}>
          <DashboardLink to="/recent-matches">Recent Matches</DashboardLink>
          <DashboardLink to="/upcoming-matches">Stream Queue</DashboardLink>
          <DashboardLink to="/top-eight">Top 8</DashboardLink>
        </HStack>
        <Spacer />
        <CreateTickerModal uid={user.uid} />
        <Button colorScheme="red" onClick={signOut}>
          Sign out
        </Button>
        <Image
          borderRadius="full"
          h={10}
          src={user?.photoURL}
          alt={`photo of ${user?.displayName}`}
        />
      </HStack>

      <Flex p={4}>{events && <EventCardList events={events} />}</Flex>
    </Box>
  );
};

export default Dashboard;
