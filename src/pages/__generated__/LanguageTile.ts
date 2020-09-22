/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LanguageTile
// ====================================================

export interface LanguageTile_languageTypes {
  __typename: "LanguageType";
  id: string;
  name: string;
  description: string | null;
}

export interface LanguageTile {
  __typename: "Language";
  id: string;
  name: string;
  description: string | null;
  isAcquired: boolean;
  languageTypes: LanguageTile_languageTypes[] | null;
}
