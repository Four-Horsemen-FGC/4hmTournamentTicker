import React from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/auth";
import { Image, Center, Button, Flex, Text } from "@chakra-ui/react";
import typoGraphicLogo from "../../assets/images/Logo_4HM_typo.svg";
// import styles from "./Landing.module.css";

const signInWithGoogle = () => {
  const firebaseAuthProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(firebaseAuthProvider);
};

const Landing = () => {
  const [user] = useAuthState(firebase.auth());
  const { push } = useHistory();
  if (user) {
    push("/dashboard");
  }

  return (
    <Center h="100%">
      <Flex maxW="70%" direction={"column"} align="center" mt="10%">
        <Image src={typoGraphicLogo} alt="4hmLogo"></Image>
        <Text fontSize="5xl">Tournament Ticker</Text>
        <Button
          colorScheme="blue"
          mt="20px"
          maxW={500}
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </Button>
      </Flex>
    </Center>
  );
};

export default Landing;
