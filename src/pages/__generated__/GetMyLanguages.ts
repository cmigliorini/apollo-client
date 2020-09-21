/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMyLanguages
// ====================================================

export interface GetMyLanguages_me_languages {
  __typename: "Language";
  id: number;
  name: string;
  description: string | null;
}

export interface GetMyLanguages_me {
  __typename: "User";
  id: number;
  email: string;
  languages: (GetMyLanguages_me_languages | null)[] | null;
}

export interface GetMyLanguages {
  me: GetMyLanguages_me | null;
}
