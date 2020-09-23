/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LanguageTypes
// ====================================================

export interface LanguageTypes_allLanguageTypes {
  __typename: "LanguageType";
  id: string;
  name: string;
  description: string | null;
}

export interface LanguageTypes {
  allLanguageTypes: (LanguageTypes_allLanguageTypes | null)[] | null;
}
