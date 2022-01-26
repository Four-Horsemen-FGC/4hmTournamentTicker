import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import "@fontsource/amarante";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Dashboard from "./domains/Dashboard/Dashboard";
import MainContainer from "./containers/MainContainer/MainContainer";
import StreamQueue from "./domains/StreamQueue/StreamQueue";
import Top8 from "./domains/Top8/Top8";
import Landing from "./domains/Landing/Landing";
import reportWebVitals from "./reportWebVitals";
import "./assets/index.css";
import theme from "./theme";

import ProtectedRoute from "./components/ProtectedRoute";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyAa24XSUkWBPh56SUELjBaKdpxH6-m5buM",
  authDomain: "hmtournamentticker.firebaseapp.com",
  projectId: "hmtournamentticker",
  storageBucket: "hmtournamentticker.appspot.com",
  messagingSenderId: "919813904397",
  appId: "1:919813904397:web:a8766d1925ca55baa31d44",
  measurementId: "G-EQ3R5FL4BK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize firestore
export const db = firebase.firestore();
export const storage = firebase.storage();

// --- Data Model is going to look roughly like this ---
// ID auto generated
// 	uID - String
// 	ActivelyTrackedEvent - {}
// 	Events - [{Event}]
// Event
// 	TournamentName - string
// 	EventName - string
// 	EventId - integer
// 	Location - string
// 	top8Id - integer
// 	messages - []

const httpLink = createHttpLink({
  uri: "https://api.smash.gg/gql/alpha",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer a110b956397909ab926a994a0d97ef7e`,
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <ProtectedRoute path="/dashboard">
              <Dashboard />
            </ProtectedRoute>

            <ProtectedRoute path="/upcoming-matches">
              <StreamQueue />
            </ProtectedRoute>

            <ProtectedRoute path="/top-eight">
              <Top8 />
            </ProtectedRoute>

            <ProtectedRoute path="/recent-matches">
              <MainContainer />
            </ProtectedRoute>

            {/* <Route path="/top-eight">{user ? <Top8 /> : <Landing />}</Route> */}
          </Switch>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
};

render(<App />, document.querySelector("#root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
