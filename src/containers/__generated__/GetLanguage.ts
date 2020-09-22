/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLanguage
// ====================================================

export interface GetLanguage_language_languageTypes {
  __typename: "LanguageType";
  id: string;
  name: string;
  description: string | null;
}

export interface GetLanguage_language {
  __typename: "Language";
  id: string;
  name: string;
  description: string | null;
  isAcquired: boolean;
  languageTypes: GetLanguage_language_languageTypes[] | null;
}

export interface GetLanguage {
  language: GetLanguage_language | null;
}

export interface GetLanguageVariables {
  languageId: string;
}
