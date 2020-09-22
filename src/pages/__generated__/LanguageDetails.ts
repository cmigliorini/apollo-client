/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LanguageDetails
// ====================================================

export interface LanguageDetails_language_languageTypes {
  __typename: "LanguageType";
  id: string;
  name: string;
  description: string | null;
}

export interface LanguageDetails_language {
  __typename: "Language";
  id: string;
  name: string;
  description: string | null;
  isAcquired: boolean;
  languageTypes: LanguageDetails_language_languageTypes[] | null;
}

export interface LanguageDetails {
  language: LanguageDetails_language | null;
}

export interface LanguageDetailsVariables {
  languageId: string;
}
