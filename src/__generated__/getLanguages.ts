/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getLanguages
// ====================================================

export interface getLanguages_allLanguages {
  __typename: "Language";
  id: number;
  name: string;
  description: string | null;
}

export interface getLanguages {
  allLanguages: (getLanguages_allLanguages | null)[] | null;
}
