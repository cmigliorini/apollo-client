/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddLanguageType
// ====================================================

export interface AddLanguageType_associateLanguageToType {
  __typename: "LanguageTypeLanguage";
  languageId: string;
  languageTypeId: string;
}

export interface AddLanguageType {
  associateLanguageToType: AddLanguageType_associateLanguageToType | null;
}

export interface AddLanguageTypeVariables {
  languageId: string;
  languageTypeId: string;
}
