/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLanguagesList
// ====================================================

export interface GetLanguagesList_allLanguages_languageTypes {
  __typename: "LanguageType";
  id: string;
  name: string;
  description: string | null;
}

export interface GetLanguagesList_allLanguages {
  __typename: "Language";
  id: string;
  name: string;
  description: string | null;
  isAcquired: boolean;
  languageTypes: GetLanguagesList_allLanguages_languageTypes[] | null;
}

export interface GetLanguagesList {
  allLanguages: (GetLanguagesList_allLanguages | null)[] | null;
}
