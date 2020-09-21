import React, { Fragment } from 'react';
import { RouteComponentProps } from '@reach/router';
import { gql, useQuery } from '@apollo/client';

import { LANGUAGE_TILE_DATA } from './languages';
import { Loading, Header, LanguageDetail } from '../components';
//import { ActionButton } from '../containers';
import * as LanguageDetailsTypes from './__generated__/LanguageDetails';

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
    
    if (loading) return <Loading />;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data) return <p>Not found</p>;
    
    return (
      <Fragment>
      <Header >
        {data && data.language && data.language.name}
      </Header>
      <LanguageDetail {...data.language} />
      {/* <ActionButton {...data.language} /> */}
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


export default Language;