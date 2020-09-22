/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AcquireLanguages
// ====================================================

export interface AcquireLanguages_acquireLanguages_languages {
  __typename: "Language";
  id: string;
  isAcquired: boolean;
}

export interface AcquireLanguages_acquireLanguages {
  __typename: "LanguageUpdateResponse";
  success: boolean;
  message: string | null;
  languages: (AcquireLanguages_acquireLanguages_languages | null)[] | null;
}

export interface AcquireLanguages {
  acquireLanguages: AcquireLanguages_acquireLanguages | null;
}

export interface AcquireLanguagesVariables {
  languageIds?: string[] | null;
}
