import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import MainContainer from './containers/MainContainer/MainContainer';
import StreamQueue from './domains/StreamQueue/StreamQueue';
import Top8 from './domains/Top8/Top8';
import reportWebVitals from './reportWebVitals';
import './assets/index.css';

const httpLink = createHttpLink({
  uri: 'https://api.smash.gg/gql/alpha',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer 8e9426444dca9d12423c7f143474fa75`,
    }
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <MainContainer /> */}
      {/* <StreamQueue /> */}
      <Top8 />
    </ApolloProvider>
  );
};

render(<App />, document.querySelector('#root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
