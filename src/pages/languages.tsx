import React, { Fragment, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import { LanguageTile, Header, Button, Loading } from '../components';
import { RouteComponentProps } from '@reach/router';

export const LANGUAGE_TILE_DATA = gql`
  fragment LanguageTile on Language {
    __typename
    id
    name
    description
    isAcquired
    languageTypes {
      id
      name
      description
    }
  }
`;

const GET_LANGUAGES = gql`
  query GetLanguagesList {
    allLanguages {       
      ...LanguageTile
      }
    }
    ${LANGUAGE_TILE_DATA}
`;

interface LanguagesProps extends RouteComponentProps {}

const Languages: React.FC<LanguagesProps> = () => {
  const {
    data,
    loading,
    error,
    fetchMore
  } = useQuery(GET_LANGUAGES);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      <Header />
      {data.allLanguages &&
        data.allLanguages.map((language: any) => (
          <LanguageTile key={language.id} language={language} />
        ))}
      {data.allLanguages && data.allLanguages.hasMore && (
        isLoadingMore
          ? <Loading />
          : <Button
              onClick={async () => {
                setIsLoadingMore(true);
                await fetchMore({
                  variables: {
                    after: data.allLanguages.cursor,
                  },
                });
                setIsLoadingMore(false);
              }}
            >
              Load More
            </Button>
      )}    </Fragment>
  );
}


export default Languages;

