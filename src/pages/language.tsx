import React, { Fragment } from 'react';
import { RouteComponentProps } from '@reach/router';
import { gql, useQuery } from '@apollo/client';

import { LANGUAGE_TILE_DATA } from './languages';
import { Loading, Header, LanguageDetail } from '../components';
import { ActionButton } from '../containers';
import * as LanguageDetailsTypes from './__generated__/LanguageDetails';
import LanguageTypeTile from '../components/language-type-tile';

interface LanguageProps extends RouteComponentProps {
  languageId?: any;
}

const Language: React.FC<LanguageProps> = ({ languageId }) => {
  const {
    data,
    loading,
    error,
  } = useQuery<
  LanguageDetailsTypes.LanguageDetails,
  LanguageDetailsTypes.LanguageDetailsVariables
  >(GET_LANGUAGE_DETAILS,
    { variables: { languageId } }
    );
    const languageTypes = useQuery(GET_ALL_LANGUAGE_TYPES);

  if (loading || languageTypes.loading) return <Loading />;
  if (error ) return <p>ERROR: {error.message}</p>;
  if (languageTypes.error) return <p>ERROR: {languageTypes.error.message}</p>;

  if (!data) {
    return <p>Not found</p>;
  }
  return (
    <Fragment>
      <Header >
        {data && data.language && data.language.name}
      </Header>
      {data && data.language && languageTypes && 
      <LanguageTypeTile language={data.language} languageTypes={languageTypes.data.allLanguageTypes}/>}
      <LanguageDetail {...data.language} />
      <ActionButton {...data.language} />
    </Fragment>
  );
}



export const GET_LANGUAGE_DETAILS = gql`
  query LanguageDetails($languageId: ID!) {
    language(languageId: $languageId) {
      ...LanguageTile
    }
  }
  ${LANGUAGE_TILE_DATA}
`;

export const LANGUAGE_TILE_TYPE_DATA = gql`
  fragment LanguageTileType on LanguageType {
    __typename
    id
    name
    description
  }
`;


export const GET_ALL_LANGUAGE_TYPES = gql`
  query LanguageTypes {
    allLanguageTypes {
      ...LanguageTileType
    }
  }
  ${LANGUAGE_TILE_TYPE_DATA}
`;

export default Language;