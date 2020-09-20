import { ApolloProvider, ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';

import React from 'react';
import { render } from 'react-dom';

const client = new ApolloClient({
  uri: 'https://mig-apollo.azurewebsites.net/api/graphql?code=gaRzafxqBxWi6LRbZJndfbAe79K6nQgOYXKMIgHLzXMaCgEMWnVFog==',
  cache: new InMemoryCache(),
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

function Languages()  {
  
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


function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
      <Languages />
    </ApolloProvider>
  );
}

render(<App />, document.getElementById('root'));

