import React from 'react';
import { gql, useMutation } from '@apollo/client';

import Button from '../components/button';
import { cartItemsVar } from '../cache';
import * as GetCartItemsTypes from '../pages/__generated__/GetCartItems';
import * as AcquireLanguagesTypes from './__generated__/AcquireLanguages';

export const ACQUIRE_LANGUAGES = gql`
  mutation AcquireLanguages($languageIds: [ID!]) {
    acquireLanguages(languageIds: $languageIds) {
      success
      message
      languages {
        id
        isAcquired
      }
    }
  }
`;

interface AcquireLanguagesProps extends GetCartItemsTypes.GetCartItems {}

const AcquireLanguages: React.FC<AcquireLanguagesProps> = ({ cartItems }) => {
  const [acquireLanguages, { data }] = useMutation<
    AcquireLanguagesTypes.AcquireLanguages,
    AcquireLanguagesTypes.AcquireLanguagesVariables
  >(
    ACQUIRE_LANGUAGES,
    {
      variables: { languageIds: cartItems },
    }
  );

  return data && data.acquireLanguages && !data.acquireLanguages.success
    ? <p data-testid="message">{data.acquireLanguages.message}</p>
    : (
      <Button
        onClick={async () => {
          await acquireLanguages();
          cartItemsVar([]);
        }}
        data-testid="book-button"
      >
        Acquire All
      </Button>
    );
}

export default AcquireLanguages;