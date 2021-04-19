import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

import Dashboard from "./domains/Dashboard/Dashboard";
import MainContainer from "./containers/MainContainer/MainContainer";
import StreamQueue from "./domains/StreamQueue/StreamQueue";
import Top8 from "./domains/Top8/Top8";
import reportWebVitals from "./reportWebVitals";
import "./assets/index.css";

// firebase.initializeApp({
//   apiKey: "AIzaSyAa24XSUkWBPh56SUELjBaKdpxH6-m5buM",
//   authDomain: "hmtournamentticker.firebaseapp.com",
//   projectId: "hmtournamentticker",
//   storageBucket: "hmtournamentticker.appspot.com",
//   messagingSenderId: "919813904397",
//   appId: "1:919813904397:web:a8766d1925ca55baa31d44",
//   measurementId: "G-EQ3R5FL4BK",
// });

// const auth = firebase.auth();
// const firestore = firebase.firestore();

const httpLink = createHttpLink({
  uri: "https://api.smash.gg/gql/alpha",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer 8e9426444dca9d12423c7f143474fa75`,
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
      <ChakraProvider>
        <Router>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/upcoming-matches">
              <StreamQueue />
            </Route>

            <Route path="/top-eight">
              <Top8 />
            </Route>

            <Route path="/recent-matches">
              <MainContainer />
            </Route>

            <Route path="/">
              <Redirect to="/dashboard" />
            </Route>
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
