/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLanguagesList
// ====================================================

export interface GetLanguagesList_allLanguages {
  __typename: "Language";
  id: string;
  name: string;
  description: string | null;
  isAcquired: boolean;
}

export interface GetLanguagesList {
  allLanguages: (GetLanguagesList_allLanguages | null)[] | null;
}
