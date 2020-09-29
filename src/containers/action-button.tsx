import React, { useState } from 'react';
import { gql, useMutation, Reference } from '@apollo/client';

import { GET_LANGUAGE_DETAILS } from '../pages/language';
import Button from '../components/button';
import { cartItemsVar } from '../cache';
import * as LanguageDetailTypes from '../pages/__generated__/LanguageDetails';

// export all queries used in this file for testing
export { GET_LANGUAGE_DETAILS };

export const FORGET_LANGUAGE = gql`
  mutation forget($languageId: ID!) {
    forgetLanguage(languageId: $languageId) {
      success
      message
      languages {
        id
        isAcquired
      }
    }
  }
`;

interface ActionButtonProps extends Partial<LanguageDetailTypes.LanguageDetails_language> {}

const ForgetLanguageButton: React.FC<ActionButtonProps> = ({ id }) => {
  const [mutate, { loading, error }] = useMutation(
    FORGET_LANGUAGE,
    {
      variables: { languageId: id },
      update(cache, { data: { forgetLanguage } }) {
        // Update the users list of trips in the cache to remove the trip that
        // was just cancelled.
        const language = forgetLanguage.languages[0];
        cache.modify({
          id: `User:${localStorage.getItem('userId')}`,
          fields: {
            trips(existingTrips) {
              const languageRef = cache.writeFragment({
                data: language,
                fragment: gql`
                  fragment RemoveLanguage on Language {
                    id
                  }
                `
              });
              return existingTrips.filter(
                (tripRef: Reference) => tripRef === languageRef
              );
            }
          }
        });
      }
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <div>
      <Button
        onClick={() => mutate()}
        data-testid={'action-button'}
      >
        Forget This Language
      </Button>
    </div>
  );
};

const ToggleLanguageButton: React.FC<ActionButtonProps> = ({ id }) => {
  const cartItems = cartItemsVar();
  const isInCart = id ? cartItems.includes(id) : false;
  const [, toggleLanguage] = useState(isInCart);
  return (
    <div>
      <Button
        onClick={() => {
          if (id) {
            cartItemsVar(
              isInCart
                ? cartItems.filter((i) => i !== id)
                : [...cartItems, id]
            );
            // Trigger a re-render to pick up the `cartItemsVar` changes.
            toggleLanguage(!isInCart);
          }
        }}
        data-testid={'action-button'}
      >
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </Button>
    </div>
  );
}

const ActionButton: React.FC<ActionButtonProps> =
  ({ isAcquired, id }) => (
    isAcquired ? <ForgetLanguageButton id={id} /> : <ToggleLanguageButton id={id} />
  );

export default ActionButton;