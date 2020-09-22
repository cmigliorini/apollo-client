import React from 'react';
import { gql, useQuery } from '@apollo/client';

import LanguageTile from '../components/language-tile';
import { LANGUAGE_TILE_DATA } from '../pages/languages';
import * as LanguageDetailTypes from '../pages/__generated__/LanguageDetails';

export const GET_LANGUAGE = gql`
  query GetLanguage($languageId: ID!) {
    language(languageId: $languageId) {
      ...LanguageTile
    }
  }
  ${LANGUAGE_TILE_DATA}
`;

interface CartItemProps extends LanguageDetailTypes.LanguageDetailsVariables {}

const CartItem: React.FC<CartItemProps> = ({ languageId }) => {
  const { data, loading, error } = useQuery<LanguageDetailTypes.LanguageDetails, LanguageDetailTypes.LanguageDetailsVariables>(
    GET_LANGUAGE,
    { variables: { languageId} }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;
  return data.language && <LanguageTile language={data.language} />;
}

export default CartItem;
