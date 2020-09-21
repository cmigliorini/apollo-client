import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';

import { Loading, Header, LanguageTile } from '../components';
import { LANGUAGE_TILE_DATA } from './languages';
import { RouteComponentProps } from '@reach/router';
import * as GetMyLanguagesTypes from './__generated__/GetMyLanguages';

export const GET_MY_LANGUAGES = gql`
  query GetMyLanguages {
    me {
      id
      email
      languages {
        ...LanguageTile
      }
    }
  }
  ${LANGUAGE_TILE_DATA}
`;

interface ProfileProps extends RouteComponentProps {}

const Profile: React.FC<ProfileProps> = () => {
  const {
    data,
    loading,
    error
  } = useQuery<GetMyLanguagesTypes.GetMyLanguages>(
    GET_MY_LANGUAGES,
    { fetchPolicy: "network-only" }
  );
  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (data === undefined) return <p>ERROR</p>;

  return (
    <Fragment>
      <Header>My Languages</Header>
      {(data.me && data.me.languages && data.me.languages.length) ? (
        data.me.languages.map((language: any) => (
          <LanguageTile key={language.id} language={language} />
        ))
      ) : (
        <p>You haven't acquired any language yet</p>
      )}
    </Fragment>
  );
}

export default Profile;