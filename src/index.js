import { ApolloProvider, ApolloClient, useQuery, gql } from '@apollo/client';

import React from 'react';
import { render } from 'react-dom';
import Login from './pages/login';
import { cache } from './cache';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

const client = new ApolloClient({
  uri: 'https://mig-apollo.azurewebsites.net/api/graphql?code=gaRzafxqBxWi6LRbZJndfbAe79K6nQgOYXKMIgHLzXMaCgEMWnVFog==',
  cache: cache,
  headers: {
    authorization: localStorage.getItem('token') || '',
    'client-name': 'Mig Apollo Client [web]',
    'client-version': '1.0.0',
  },
  typeDefs,
});

const LANGUAGES = gql`
  query getLanguages {
    languages {
      id
      name
      description
    }
  }
`;

function Languages() {

  const { loading, error, data } = useQuery(LANGUAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data) {
    return data.languages.map((language) => (
      <div key={language.id}>
        <h2>{language.name}</h2>
        <p>
          {language.description}
        </p>
      </div>
    ))
  }
  else {
    return <div>no language found</div>;
  }
}

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

function IsLoggedIn() {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? <div><h1>You're logged in: here are available languages</h1>   <Languages /></div> : <Login />;
}

function App() {
  return (
    <ApolloProvider client={client}>
      <IsLoggedIn />
    </ApolloProvider>
  );
}

render(<App />, document.getElementById('root'));

