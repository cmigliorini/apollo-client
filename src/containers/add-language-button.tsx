import React from 'react';
import { gql, useMutation } from '@apollo/client';

import * as LanguageDetailTypes from '../pages/__generated__/LanguageDetails';
import { ButtonSmallDark, ButtonSmallLight } from '../components/button-small';
import tick from '../assets/icons/tick.svg';

interface LanguageTypeButtonProps extends Partial<LanguageDetailTypes.LanguageDetails_language> {
    languageType: LanguageDetailTypes.LanguageDetails_language_languageTypes
};

export const ADD_LANGUAGE_TYPE = gql`
  mutation AddLanguageType($languageId: ID!, $languageTypeId: ID!) {
    associateLanguageToType(languageId: $languageId, languageTypeId: $languageTypeId) {
        languageId
        languageTypeId
    }
  }
`;

const AddLanguageTypeButton: React.FC<LanguageTypeButtonProps> = ({ id, languageType }) => {
    const [mutate, { loading, error }] = useMutation(
        ADD_LANGUAGE_TYPE,
        {
            variables: { languageId: id, languageTypeId: languageType.id },
        }
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error occurred</p>;

    return (
        <ButtonSmallLight onClick={() => mutate()}>
            {languageType.name}
        </ButtonSmallLight>
    );
};

export const REMOVE_LANGUAGE_TYPE = gql`
  mutation RemoveLanguageType($languageId: ID!, $languageTypeId: ID!) {
    dissociateLanguageFromType(languageId: $languageId, languageTypeId: $languageTypeId)
  }
`;

const RemoveLanguageTypeButton: React.FC<LanguageTypeButtonProps> = ({ id, languageType }) => {
    const [mutate, { loading, error }] = useMutation(
        REMOVE_LANGUAGE_TYPE,
        {
            variables: { languageId: id, languageTypeId: languageType.id },
        }
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error occurred</p>;

    return (
        <ButtonSmallDark onClick={() => mutate()} >
            {languageType.name} <img alt="X" src={tick}></img>
        </ButtonSmallDark>
    );
};

const LanguageTypeButton: React.FC<LanguageTypeButtonProps> =
    ({ id, languageTypes, languageType }) => {
        // Is requested language type in language's ones ?
        const isIn =
            languageTypes &&
            languageTypes
                .map(lt => lt.id)
                .includes(languageType.id);
        // display relevant button
        return isIn ?
            <RemoveLanguageTypeButton id={id} languageType={languageType} /> :
            <AddLanguageTypeButton id={id} languageType={languageType} />
    };
export default LanguageTypeButton;