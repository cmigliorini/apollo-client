import React, { useState } from 'react';
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

export const REMOVE_LANGUAGE_TYPE = gql`
  mutation RemoveLanguageType($languageId: ID!, $languageTypeId: ID!) {
    dissociateLanguageFromType(languageId: $languageId, languageTypeId: $languageTypeId)
  }
`;

const ToggleLanguageTypeButton: React.FC<LanguageTypeButtonProps> =
    ({ id, languageTypes, languageType }) => {
        // facility variables
        const languageTypesIds = languageTypes?.map(lt => lt.id);
        const isOfType = languageType.id && languageTypesIds ? languageTypesIds.includes(languageType.id) : false;
        const [newIsOfType, toggleLanguageType] = useState(isOfType);

        // The mutations
        const [removeLanguage, { loading: loadingRemove, error: errorRemove }] = useMutation(
            REMOVE_LANGUAGE_TYPE,
            {
                variables: { languageId: id, languageTypeId: languageType.id },
            }
        );
        const [addLanguage, { loading: loadingAdd, error: errorAdd }] = useMutation(
            ADD_LANGUAGE_TYPE,
            {
                variables: { languageId: id, languageTypeId: languageType.id },
            }
        );
        const mutate: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) = () => {
            if (id && languageType.id) {
                newIsOfType ? removeLanguage() : addLanguage();
                toggleLanguageType(!newIsOfType);
            }
        };
        if (loadingAdd || loadingRemove) return <ButtonSmallLight>Loading...</ButtonSmallLight>;
        if (errorAdd || errorRemove) return <ButtonSmallLight>An error occurred</ButtonSmallLight>;

        return newIsOfType ?
            <ButtonSmallDark onClick={mutate}>{languageType.name} <img alt="X" src={tick}></img></ButtonSmallDark> :
            <ButtonSmallLight onClick={mutate}>{languageType.name}</ButtonSmallLight>;
    }

export default ToggleLanguageTypeButton;