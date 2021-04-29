import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";
import { Spinner } from "@chakra-ui/spinner";
import { Center } from "@chakra-ui/layout";

const PrivateRoute = ({ children, ...props }) => {
  const [user, loading] = useAuthState(firebase.auth());

  if (loading)
    return (
      <Center h="full" w="full">
        <Spinner />
      </Center>
    );

  return <Route {...props}>{user ? children : <Redirect to="/" />}</Route>;
};

export default PrivateRoute;
