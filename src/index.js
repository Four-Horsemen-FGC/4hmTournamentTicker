import React from 'react';
import { render } from 'react-dom';
import MainContainer from './containers/MainContainer.jsx';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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
      <MainContainer />
    </ApolloProvider>
  );
};



render(<App />, document.getElementById('root'));















// import background from "../public/bg_grain+grad+overlay_1920x1080.png";

// const root = document.getElementById('root');
// const mainImage = document.createElement('img');

// mainImage.src = background;
// console.log('wingus');
// root.appendChild(mainImage);
