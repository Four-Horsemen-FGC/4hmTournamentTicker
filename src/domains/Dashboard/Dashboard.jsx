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
import { db } from "../../index.js";
import { useHistory } from "react-router-dom";
import { EventCardList } from "../../components/EventCard";
import { DashboardLink } from "../../components/Link";
import { UpdateTheme } from "./UpdateThemeModal/UpdateTheme";

const Dashboard = () => {
  const [user, loading] = useAuthState(firebase.auth());
  const { push } = useHistory();

  const signOut = () => {
    push("/");
    firebase.auth().signOut();
  };
  const [value] = useDocument(db.doc(`users/${user.uid}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const events = value?.data().events;

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
        <UpdateTheme uid={user.uid} />
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
