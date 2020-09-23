/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMyLanguages
// ====================================================

export interface GetMyLanguages_me_languages_languageTypes {
  __typename: "LanguageType";
  id: string;
  name: string;
  description: string | null;
}

export interface GetMyLanguages_me_languages {
  __typename: "Language";
  id: string;
  name: string;
  description: string | null;
  isAcquired: boolean;
  languageTypes: GetMyLanguages_me_languages_languageTypes[] | null;
}

export interface GetMyLanguages_me {
  __typename: "User";
  id: string;
  email: string;
  languages: (GetMyLanguages_me_languages | null)[] | null;
}

export interface GetMyLanguages {
  me: GetMyLanguages_me | null;
}
