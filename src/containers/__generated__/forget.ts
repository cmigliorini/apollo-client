/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: forget
// ====================================================

export interface forget_forgetLanguage_languages {
  __typename: "Language";
  id: string;
  isAcquired: boolean;
}

export interface forget_forgetLanguage {
  __typename: "LanguageUpdateResponse";
  success: boolean;
  message: string | null;
  languages: (forget_forgetLanguage_languages | null)[] | null;
}

export interface forget {
  forgetLanguage: forget_forgetLanguage | null;
}

export interface forgetVariables {
  languageId: string;
}
