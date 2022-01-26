import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/auth";
import { Image, Center, Button, Flex, Text, Input } from "@chakra-ui/react";
import typoGraphicLogo from "../../assets/images/Logo_4HM_typo.svg";
// import styles from "./Landing.module.css";
import { db } from "../../index";

const signInWithGoogle = () => {
  const firebaseAuthProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(firebaseAuthProvider);
};

const a = "RedMonitorGrapefruitSoap";

const Landing = () => {
  const [password, setPassword] = useState("");
  const [user] = useAuthState(firebase.auth());
  const history = useHistory();

  useEffect(() => {
    // IIFE
    (async () => {
      if (user) {
        const dbUser = await db.collection("users").doc(user.uid).get();

        console.log(`dbUser.exists`, dbUser.exists);
        if (!dbUser.exists) {
          await db
            .collection("users")
            .doc(user.uid)
            .set({ events: [], activeEvent: {} });
        }
        history.push("/dashboard");
      }
    })();
  }, [user, history]);

  return (
    <Center h="100%">
      <Flex maxW="full" maxH="full" direction={"column"} align="center">
        <Image maxW="70%" src={typoGraphicLogo} alt="4hmLogo"></Image>
        <Text fontSize="5xl">Tournament Ticker</Text>
        <Input
          textAlign="center"
          variant="flushed"
          maxW="xs"
          placeholder="enter admin password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        ></Input>
        <Button
          disabled={password !== a}
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
