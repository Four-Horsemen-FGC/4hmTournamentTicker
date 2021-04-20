import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";

const PrivateRoute = ({ children, ...props }) => {
  const [user, loading] = useAuthState(firebase.auth());

  if (loading) return <div>Loading...</div>;

  return <Route {...props}>{user ? children : <Redirect to="/" />}</Route>;
};

export default PrivateRoute;
