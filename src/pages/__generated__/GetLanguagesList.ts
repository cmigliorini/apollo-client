/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLanguagesList
// ====================================================

export interface GetLanguagesList_allLanguages {
  __typename: "Language";
  id: number;
  name: string;
  description: string | null;
}

export interface GetLanguagesList {
  allLanguages: (GetLanguagesList_allLanguages | null)[] | null;
}
