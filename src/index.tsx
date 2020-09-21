import { ApolloProvider, ApolloClient, useQuery, gql } from '@apollo/client';

import React from 'react';
import { render } from 'react-dom';
import Pages from './pages';
import Login from './pages/login';
import { cache } from './cache';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

const client = new ApolloClient({
  uri: 'https://mig-apollo.azurewebsites.net/api/graphql?code=gaRzafxqBxWi6LRbZJndfbAe79K6nQgOYXKMIgHLzXMaCgEMWnVFog==',
  cache,
  headers: {
    authorization: localStorage.getItem('token') || '',
    'client-name': 'Space Explorer [web]',
    'client-version': '1.0.0',
  },
  typeDefs,
  resolvers: {},
});

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

function IsLoggedIn() {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? <Pages /> : <Login />;
}

function App() {
  return (
    <ApolloProvider client={client}>
      <IsLoggedIn />
    </ApolloProvider>
  );
}

render(<App />, document.getElementById('root'));

