import React from "react";
import CreateTickerModal from "./CreateTickerModal/CreateTickerModal";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import {
  Button,
  Heading,
  HStack,
  Text,
  Spacer,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../index.js"; // importing firestore instance from index.js. is there a more elegant way to get the database in children components????
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const [user, loading] = useAuthState(firebase.auth());
  const { push } = useHistory();

  const signOut = () => {
    push("/");
    firebase.auth().signOut();
  };
  //can get the document that has the corresponding userId but having trouble updating document (see CreateTickerModal.jsx)
  // const [value] = useCollectionData(
  //   db.collection("users").where("uid", "==", `${user?.uid}`),
  //   {
  //     snapshotListenOptions: { includeMetadataChanges: true },
  //   }
  // );

  // console.log(value);

  if (loading) {
    return <Heading>Loading stuff...</Heading>;
  }

  return (
    <>
      <HStack px={5} py={5} backgroundColor="blue.400">
        <Text color={"whiteAlpha.900"} fontSize="3xl">
          Greetings {user?.displayName}
        </Text>
        <Spacer />
        <CreateTickerModal uid={user.uid} />
        <Button onClick={signOut}>Sign out</Button>
        <Image
          borderRadius="full"
          h={10}
          src={user?.photoURL}
          alt={`photo of ${user?.displayName}`}
        />
      </HStack>

      <Flex bg="pink.200" w="100%" h={300}></Flex>
    </>
  );
};

export default Dashboard;
