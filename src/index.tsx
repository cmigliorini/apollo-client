import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  useQuery,
  gql, HttpLink
} from '@apollo/client';

import Pages from './pages';
import Login from './pages/login';
import injectStyles from './styles';
import { cache } from './cache';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    # cartItems: [ID!]!
  }
`;

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'https://mig-apollo.azurewebsites.net/api/graphql?code=gaRzafxqBxWi6LRbZJndfbAe79K6nQgOYXKMIgHLzXMaCgEMWnVFog==',
    // uri: 'http://localhost:7071/api/graphql',
    headers: {
      authorization: localStorage.getItem('token') || '',
      'client-name': 'Languages Explorer [web]',
      'client-version': '1.0.0', 
    },
  }),
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

injectStyles();
ReactDOM.render(
  <ApolloProvider client={client}>
    <IsLoggedIn />
  </ApolloProvider>,
  document.getElementById('root'),
);
