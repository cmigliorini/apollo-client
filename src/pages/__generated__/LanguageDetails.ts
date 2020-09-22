/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LanguageDetails
// ====================================================

export interface LanguageDetails_language {
  __typename: "Language";
  id: string;
  name: string;
  description: string | null;
  isAcquired: boolean;
}

export interface LanguageDetails {
  language: LanguageDetails_language | null;
}

export interface LanguageDetailsVariables {
  languageId: string;
}
