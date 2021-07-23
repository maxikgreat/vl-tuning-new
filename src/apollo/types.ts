// THIS IS A GENERATED FILE, use `yarn codegen` to generate
/* tslint:disable */
/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};





export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  productImages: Array<Product>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetProductImagesArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  mimeType?: Maybe<Scalars['String']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  productImages?: Maybe<ProductCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  mimeType?: Maybe<Scalars['String']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  productImages_every?: Maybe<ProductWhereInput>;
  productImages_some?: Maybe<ProductWhereInput>;
  productImages_none?: Maybe<ProductWhereInput>;
};

export enum AssetOrderByInput {
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  mimeType?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  productImages?: Maybe<ProductUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  mimeType?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  mimeType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  mimeType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  productImages_every?: Maybe<ProductWhereInput>;
  productImages_some?: Maybe<ProductWhereInput>;
  productImages_none?: Maybe<ProductWhereInput>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Category of products, e.g. Menswear. */
export type Category = Node & {
  __typename?: 'Category';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Category>;
  /** Get the document in other stages */
  documentInStages: Array<Category>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  products: Array<Product>;
  /** List of Category versions */
  history: Array<Version>;
};


/** Category of products, e.g. Menswear. */
export type CategoryLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Category of products, e.g. Menswear. */
export type CategoryDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Category of products, e.g. Menswear. */
export type CategoryCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Category of products, e.g. Menswear. */
export type CategoryUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Category of products, e.g. Menswear. */
export type CategoryPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Category of products, e.g. Menswear. */
export type CategoryCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Category of products, e.g. Menswear. */
export type CategoryUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Category of products, e.g. Menswear. */
export type CategoryPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Category of products, e.g. Menswear. */
export type CategoryProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Category of products, e.g. Menswear. */
export type CategoryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type CategoryConnectInput = {
  /** Document to connect */
  where: CategoryWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<CategoryEdge>;
  aggregate: Aggregate;
};

export type CategoryCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  /** slug input for default locale (en) */
  slug: Scalars['String'];
  /** name input for default locale (en) */
  name: Scalars['String'];
  products?: Maybe<ProductCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<CategoryCreateLocalizationsInput>;
};

export type CategoryCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  name: Scalars['String'];
};

export type CategoryCreateLocalizationInput = {
  /** Localization input */
  data: CategoryCreateLocalizationDataInput;
  locale: Locale;
};

export type CategoryCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<CategoryCreateLocalizationInput>>;
};

export type CategoryCreateManyInlineInput = {
  /** Create and connect multiple existing Category documents */
  create?: Maybe<Array<CategoryCreateInput>>;
  /** Connect multiple existing Category documents */
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryCreateOneInlineInput = {
  /** Create and connect one Category document */
  create?: Maybe<CategoryCreateInput>;
  /** Connect one existing Category document */
  connect?: Maybe<CategoryWhereUniqueInput>;
};

/** An edge in a connection. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /** The item at the end of the edge. */
  node: Category;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type CategoryManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CategoryWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  products_every?: Maybe<ProductWhereInput>;
  products_some?: Maybe<ProductWhereInput>;
  products_none?: Maybe<ProductWhereInput>;
};

export enum CategoryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type CategoryUpdateInput = {
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  /** slug input for default locale (en) */
  slug?: Maybe<Scalars['String']>;
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<CategoryUpdateLocalizationsInput>;
};

export type CategoryUpdateLocalizationDataInput = {
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CategoryUpdateLocalizationInput = {
  data: CategoryUpdateLocalizationDataInput;
  locale: Locale;
};

export type CategoryUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<CategoryCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<CategoryUpdateLocalizationInput>>;
  upsert?: Maybe<Array<CategoryUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type CategoryUpdateManyInlineInput = {
  /** Create and connect multiple Category documents */
  create?: Maybe<Array<CategoryCreateInput>>;
  /** Connect multiple existing Category documents */
  connect?: Maybe<Array<CategoryConnectInput>>;
  /** Override currently-connected documents with multiple existing Category documents */
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  /** Update multiple Category documents */
  update?: Maybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Category documents */
  upsert?: Maybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Category documents */
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  /** Delete multiple Category documents */
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryUpdateManyInput = {
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<CategoryUpdateManyLocalizationsInput>;
};

export type CategoryUpdateManyLocalizationDataInput = {
  description?: Maybe<Scalars['String']>;
};

export type CategoryUpdateManyLocalizationInput = {
  data: CategoryUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CategoryUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<CategoryUpdateManyLocalizationInput>>;
};

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: CategoryWhereInput;
  /** Update many input */
  data: CategoryUpdateManyInput;
};

export type CategoryUpdateOneInlineInput = {
  /** Create and connect one Category document */
  create?: Maybe<CategoryCreateInput>;
  /** Update single Category document */
  update?: Maybe<CategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Category document */
  upsert?: Maybe<CategoryUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Category document */
  connect?: Maybe<CategoryWhereUniqueInput>;
  /** Disconnect currently connected Category document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Category document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type CategoryUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CategoryWhereUniqueInput;
  /** Document to update */
  data: CategoryUpdateInput;
};

export type CategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: CategoryCreateInput;
  /** Update document if it exists */
  update: CategoryUpdateInput;
};

export type CategoryUpsertLocalizationInput = {
  update: CategoryUpdateLocalizationDataInput;
  create: CategoryCreateLocalizationDataInput;
  locale: Locale;
};

export type CategoryUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CategoryWhereUniqueInput;
  /** Upsert data */
  data: CategoryUpsertInput;
};

/** Identifies documents */
export type CategoryWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CategoryWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  products_every?: Maybe<ProductWhereInput>;
  products_some?: Maybe<ProductWhereInput>;
  products_none?: Maybe<ProductWhereInput>;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Collection of products, e.g. Winter Sale. */
export type Collection = Node & {
  __typename?: 'Collection';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Collection>;
  /** Get the document in other stages */
  documentInStages: Array<Collection>;
  description?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  slug: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  products: Array<Product>;
  /** List of Collection versions */
  history: Array<Version>;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type CollectionConnectInput = {
  /** Document to connect */
  where: CollectionWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<CollectionEdge>;
  aggregate: Aggregate;
};

export type CollectionCreateInput = {
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** name input for default locale (en) */
  name: Scalars['String'];
  /** slug input for default locale (en) */
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  products?: Maybe<ProductCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<CollectionCreateLocalizationsInput>;
};

export type CollectionCreateLocalizationDataInput = {
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CollectionCreateLocalizationInput = {
  /** Localization input */
  data: CollectionCreateLocalizationDataInput;
  locale: Locale;
};

export type CollectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<CollectionCreateLocalizationInput>>;
};

export type CollectionCreateManyInlineInput = {
  /** Create and connect multiple existing Collection documents */
  create?: Maybe<Array<CollectionCreateInput>>;
  /** Connect multiple existing Collection documents */
  connect?: Maybe<Array<CollectionWhereUniqueInput>>;
};

export type CollectionCreateOneInlineInput = {
  /** Create and connect one Collection document */
  create?: Maybe<CollectionCreateInput>;
  /** Connect one existing Collection document */
  connect?: Maybe<CollectionWhereUniqueInput>;
};

/** An edge in a connection. */
export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  /** The item at the end of the edge. */
  node: Collection;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type CollectionManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CollectionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  createdBy?: Maybe<UserWhereInput>;
  products_every?: Maybe<ProductWhereInput>;
  products_some?: Maybe<ProductWhereInput>;
  products_none?: Maybe<ProductWhereInput>;
};

export enum CollectionOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC'
}

export type CollectionUpdateInput = {
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  /** slug input for default locale (en) */
  slug?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<CollectionUpdateLocalizationsInput>;
};

export type CollectionUpdateLocalizationDataInput = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type CollectionUpdateLocalizationInput = {
  data: CollectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type CollectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<CollectionCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<CollectionUpdateLocalizationInput>>;
  upsert?: Maybe<Array<CollectionUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type CollectionUpdateManyInlineInput = {
  /** Create and connect multiple Collection documents */
  create?: Maybe<Array<CollectionCreateInput>>;
  /** Connect multiple existing Collection documents */
  connect?: Maybe<Array<CollectionConnectInput>>;
  /** Override currently-connected documents with multiple existing Collection documents */
  set?: Maybe<Array<CollectionWhereUniqueInput>>;
  /** Update multiple Collection documents */
  update?: Maybe<Array<CollectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Collection documents */
  upsert?: Maybe<Array<CollectionUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Collection documents */
  disconnect?: Maybe<Array<CollectionWhereUniqueInput>>;
  /** Delete multiple Collection documents */
  delete?: Maybe<Array<CollectionWhereUniqueInput>>;
};

export type CollectionUpdateManyInput = {
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<CollectionUpdateManyLocalizationsInput>;
};

export type CollectionUpdateManyLocalizationDataInput = {
  description?: Maybe<Scalars['String']>;
};

export type CollectionUpdateManyLocalizationInput = {
  data: CollectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CollectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<CollectionUpdateManyLocalizationInput>>;
};

export type CollectionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: CollectionWhereInput;
  /** Update many input */
  data: CollectionUpdateManyInput;
};

export type CollectionUpdateOneInlineInput = {
  /** Create and connect one Collection document */
  create?: Maybe<CollectionCreateInput>;
  /** Update single Collection document */
  update?: Maybe<CollectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Collection document */
  upsert?: Maybe<CollectionUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Collection document */
  connect?: Maybe<CollectionWhereUniqueInput>;
  /** Disconnect currently connected Collection document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Collection document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type CollectionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CollectionWhereUniqueInput;
  /** Document to update */
  data: CollectionUpdateInput;
};

export type CollectionUpsertInput = {
  /** Create document if it didn't exist */
  create: CollectionCreateInput;
  /** Update document if it exists */
  update: CollectionUpdateInput;
};

export type CollectionUpsertLocalizationInput = {
  update: CollectionUpdateLocalizationDataInput;
  create: CollectionCreateLocalizationDataInput;
  locale: Locale;
};

export type CollectionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CollectionWhereUniqueInput;
  /** Upsert data */
  data: CollectionUpsertInput;
};

/** Identifies documents */
export type CollectionWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CollectionWhereInput>>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  createdBy?: Maybe<UserWhereInput>;
  products_every?: Maybe<ProductWhereInput>;
  products_some?: Maybe<ProductWhereInput>;
  products_none?: Maybe<ProductWhereInput>;
};

/** References Collection record uniquely */
export type CollectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};

export type Currency = Node & {
  __typename?: 'Currency';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Currency>;
  code: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  rate: Scalars['Float'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  default: Scalars['Boolean'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of Currency versions */
  history: Array<Version>;
};


export type CurrencyDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type CurrencyCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CurrencyUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CurrencyPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CurrencyHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type CurrencyConnectInput = {
  /** Document to connect */
  where: CurrencyWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type CurrencyConnection = {
  __typename?: 'CurrencyConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<CurrencyEdge>;
  aggregate: Aggregate;
};

export type CurrencyCreateInput = {
  code: Scalars['String'];
  rate: Scalars['Float'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  default: Scalars['Boolean'];
};

export type CurrencyCreateManyInlineInput = {
  /** Create and connect multiple existing Currency documents */
  create?: Maybe<Array<CurrencyCreateInput>>;
  /** Connect multiple existing Currency documents */
  connect?: Maybe<Array<CurrencyWhereUniqueInput>>;
};

export type CurrencyCreateOneInlineInput = {
  /** Create and connect one Currency document */
  create?: Maybe<CurrencyCreateInput>;
  /** Connect one existing Currency document */
  connect?: Maybe<CurrencyWhereUniqueInput>;
};

/** An edge in a connection. */
export type CurrencyEdge = {
  __typename?: 'CurrencyEdge';
  /** The item at the end of the edge. */
  node: Currency;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type CurrencyManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CurrencyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CurrencyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CurrencyWhereInput>>;
  code?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  rate?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  rate_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  rate_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  rate_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  rate_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  rate_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  rate_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  rate_gte?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  default?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  default_not?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum CurrencyOrderByInput {
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RateAsc = 'rate_ASC',
  RateDesc = 'rate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DefaultAsc = 'default_ASC',
  DefaultDesc = 'default_DESC'
}

export type CurrencyUpdateInput = {
  code?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
  default?: Maybe<Scalars['Boolean']>;
};

export type CurrencyUpdateManyInlineInput = {
  /** Create and connect multiple Currency documents */
  create?: Maybe<Array<CurrencyCreateInput>>;
  /** Connect multiple existing Currency documents */
  connect?: Maybe<Array<CurrencyConnectInput>>;
  /** Override currently-connected documents with multiple existing Currency documents */
  set?: Maybe<Array<CurrencyWhereUniqueInput>>;
  /** Update multiple Currency documents */
  update?: Maybe<Array<CurrencyUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Currency documents */
  upsert?: Maybe<Array<CurrencyUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Currency documents */
  disconnect?: Maybe<Array<CurrencyWhereUniqueInput>>;
  /** Delete multiple Currency documents */
  delete?: Maybe<Array<CurrencyWhereUniqueInput>>;
};

export type CurrencyUpdateManyInput = {
  rate?: Maybe<Scalars['Float']>;
};

export type CurrencyUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: CurrencyWhereInput;
  /** Update many input */
  data: CurrencyUpdateManyInput;
};

export type CurrencyUpdateOneInlineInput = {
  /** Create and connect one Currency document */
  create?: Maybe<CurrencyCreateInput>;
  /** Update single Currency document */
  update?: Maybe<CurrencyUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Currency document */
  upsert?: Maybe<CurrencyUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Currency document */
  connect?: Maybe<CurrencyWhereUniqueInput>;
  /** Disconnect currently connected Currency document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Currency document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type CurrencyUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CurrencyWhereUniqueInput;
  /** Document to update */
  data: CurrencyUpdateInput;
};

export type CurrencyUpsertInput = {
  /** Create document if it didn't exist */
  create: CurrencyCreateInput;
  /** Update document if it exists */
  update: CurrencyUpdateInput;
};

export type CurrencyUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CurrencyWhereUniqueInput;
  /** Upsert data */
  data: CurrencyUpsertInput;
};

/** Identifies documents */
export type CurrencyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CurrencyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CurrencyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CurrencyWhereInput>>;
  code?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  rate?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  rate_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  rate_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  rate_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  rate_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  rate_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  rate_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  rate_gte?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  default?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  default_not?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References Currency record uniquely */
export type CurrencyWhereUniqueInput = {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  default?: Maybe<Scalars['Boolean']>;
};



export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};


export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};


/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
  De = 'de'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


export type Mutation = {
  __typename?: 'Mutation';
  /** Create one collection */
  createCollection?: Maybe<Collection>;
  /** Update one collection */
  updateCollection?: Maybe<Collection>;
  /** Delete one collection from _all_ existing stages. Returns deleted document. */
  deleteCollection?: Maybe<Collection>;
  /** Upsert one collection */
  upsertCollection?: Maybe<Collection>;
  /** Publish one collection */
  publishCollection?: Maybe<Collection>;
  /** Unpublish one collection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCollection?: Maybe<Collection>;
  /** Update many Collection documents */
  updateManyCollectionsConnection: CollectionConnection;
  /** Delete many Collection documents, return deleted documents */
  deleteManyCollectionsConnection: CollectionConnection;
  /** Publish many Collection documents */
  publishManyCollectionsConnection: CollectionConnection;
  /** Find many Collection documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCollectionsConnection: CollectionConnection;
  /**
   * Update many collections
   * @deprecated Please use the new paginated many mutation (updateManyCollectionsConnection)
   */
  updateManyCollections: BatchPayload;
  /**
   * Delete many Collection documents
   * @deprecated Please use the new paginated many mutation (deleteManyCollectionsConnection)
   */
  deleteManyCollections: BatchPayload;
  /**
   * Publish many Collection documents
   * @deprecated Please use the new paginated many mutation (publishManyCollectionsConnection)
   */
  publishManyCollections: BatchPayload;
  /**
   * Unpublish many Collection documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCollectionsConnection)
   */
  unpublishManyCollections: BatchPayload;
  /** Create one currency */
  createCurrency?: Maybe<Currency>;
  /** Update one currency */
  updateCurrency?: Maybe<Currency>;
  /** Delete one currency from _all_ existing stages. Returns deleted document. */
  deleteCurrency?: Maybe<Currency>;
  /** Upsert one currency */
  upsertCurrency?: Maybe<Currency>;
  /** Publish one currency */
  publishCurrency?: Maybe<Currency>;
  /** Unpublish one currency from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCurrency?: Maybe<Currency>;
  /** Update many Currency documents */
  updateManyCurrenciesConnection: CurrencyConnection;
  /** Delete many Currency documents, return deleted documents */
  deleteManyCurrenciesConnection: CurrencyConnection;
  /** Publish many Currency documents */
  publishManyCurrenciesConnection: CurrencyConnection;
  /** Find many Currency documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCurrenciesConnection: CurrencyConnection;
  /**
   * Update many currencies
   * @deprecated Please use the new paginated many mutation (updateManyCurrenciesConnection)
   */
  updateManyCurrencies: BatchPayload;
  /**
   * Delete many Currency documents
   * @deprecated Please use the new paginated many mutation (deleteManyCurrenciesConnection)
   */
  deleteManyCurrencies: BatchPayload;
  /**
   * Publish many Currency documents
   * @deprecated Please use the new paginated many mutation (publishManyCurrenciesConnection)
   */
  publishManyCurrencies: BatchPayload;
  /**
   * Unpublish many Currency documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCurrenciesConnection)
   */
  unpublishManyCurrencies: BatchPayload;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one category */
  createCategory?: Maybe<Category>;
  /** Update one category */
  updateCategory?: Maybe<Category>;
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  deleteCategory?: Maybe<Category>;
  /** Upsert one category */
  upsertCategory?: Maybe<Category>;
  /** Publish one category */
  publishCategory?: Maybe<Category>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCategory?: Maybe<Category>;
  /** Update many Category documents */
  updateManyCategoriesConnection: CategoryConnection;
  /** Delete many Category documents, return deleted documents */
  deleteManyCategoriesConnection: CategoryConnection;
  /** Publish many Category documents */
  publishManyCategoriesConnection: CategoryConnection;
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCategoriesConnection: CategoryConnection;
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  updateManyCategories: BatchPayload;
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  deleteManyCategories: BatchPayload;
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  publishManyCategories: BatchPayload;
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  unpublishManyCategories: BatchPayload;
  /** Create one product */
  createProduct?: Maybe<Product>;
  /** Update one product */
  updateProduct?: Maybe<Product>;
  /** Delete one product from _all_ existing stages. Returns deleted document. */
  deleteProduct?: Maybe<Product>;
  /** Upsert one product */
  upsertProduct?: Maybe<Product>;
  /** Publish one product */
  publishProduct?: Maybe<Product>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProduct?: Maybe<Product>;
  /** Update many Product documents */
  updateManyProductsConnection: ProductConnection;
  /** Delete many Product documents, return deleted documents */
  deleteManyProductsConnection: ProductConnection;
  /** Publish many Product documents */
  publishManyProductsConnection: ProductConnection;
  /** Find many Product documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductsConnection: ProductConnection;
  /**
   * Update many products
   * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
   */
  updateManyProducts: BatchPayload;
  /**
   * Delete many Product documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
   */
  deleteManyProducts: BatchPayload;
  /**
   * Publish many Product documents
   * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
   */
  publishManyProducts: BatchPayload;
  /**
   * Unpublish many Product documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
   */
  unpublishManyProducts: BatchPayload;
  /** Create one productColorVariant */
  createProductColorVariant?: Maybe<ProductColorVariant>;
  /** Update one productColorVariant */
  updateProductColorVariant?: Maybe<ProductColorVariant>;
  /** Delete one productColorVariant from _all_ existing stages. Returns deleted document. */
  deleteProductColorVariant?: Maybe<ProductColorVariant>;
  /** Upsert one productColorVariant */
  upsertProductColorVariant?: Maybe<ProductColorVariant>;
  /** Publish one productColorVariant */
  publishProductColorVariant?: Maybe<ProductColorVariant>;
  /** Unpublish one productColorVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProductColorVariant?: Maybe<ProductColorVariant>;
  /** Update many ProductColorVariant documents */
  updateManyProductColorVariantsConnection: ProductColorVariantConnection;
  /** Delete many ProductColorVariant documents, return deleted documents */
  deleteManyProductColorVariantsConnection: ProductColorVariantConnection;
  /** Publish many ProductColorVariant documents */
  publishManyProductColorVariantsConnection: ProductColorVariantConnection;
  /** Find many ProductColorVariant documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductColorVariantsConnection: ProductColorVariantConnection;
  /**
   * Update many productColorVariants
   * @deprecated Please use the new paginated many mutation (updateManyProductColorVariantsConnection)
   */
  updateManyProductColorVariants: BatchPayload;
  /**
   * Delete many ProductColorVariant documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductColorVariantsConnection)
   */
  deleteManyProductColorVariants: BatchPayload;
  /**
   * Publish many ProductColorVariant documents
   * @deprecated Please use the new paginated many mutation (publishManyProductColorVariantsConnection)
   */
  publishManyProductColorVariants: BatchPayload;
  /**
   * Unpublish many ProductColorVariant documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductColorVariantsConnection)
   */
  unpublishManyProductColorVariants: BatchPayload;
  /** Create one productSizeVariant */
  createProductSizeVariant?: Maybe<ProductSizeVariant>;
  /** Update one productSizeVariant */
  updateProductSizeVariant?: Maybe<ProductSizeVariant>;
  /** Delete one productSizeVariant from _all_ existing stages. Returns deleted document. */
  deleteProductSizeVariant?: Maybe<ProductSizeVariant>;
  /** Upsert one productSizeVariant */
  upsertProductSizeVariant?: Maybe<ProductSizeVariant>;
  /** Publish one productSizeVariant */
  publishProductSizeVariant?: Maybe<ProductSizeVariant>;
  /** Unpublish one productSizeVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProductSizeVariant?: Maybe<ProductSizeVariant>;
  /** Update many ProductSizeVariant documents */
  updateManyProductSizeVariantsConnection: ProductSizeVariantConnection;
  /** Delete many ProductSizeVariant documents, return deleted documents */
  deleteManyProductSizeVariantsConnection: ProductSizeVariantConnection;
  /** Publish many ProductSizeVariant documents */
  publishManyProductSizeVariantsConnection: ProductSizeVariantConnection;
  /** Find many ProductSizeVariant documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductSizeVariantsConnection: ProductSizeVariantConnection;
  /**
   * Update many productSizeVariants
   * @deprecated Please use the new paginated many mutation (updateManyProductSizeVariantsConnection)
   */
  updateManyProductSizeVariants: BatchPayload;
  /**
   * Delete many ProductSizeVariant documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductSizeVariantsConnection)
   */
  deleteManyProductSizeVariants: BatchPayload;
  /**
   * Publish many ProductSizeVariant documents
   * @deprecated Please use the new paginated many mutation (publishManyProductSizeVariantsConnection)
   */
  publishManyProductSizeVariants: BatchPayload;
  /**
   * Unpublish many ProductSizeVariant documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductSizeVariantsConnection)
   */
  unpublishManyProductSizeVariants: BatchPayload;
  /** Create one productSizeColorVariant */
  createProductSizeColorVariant?: Maybe<ProductSizeColorVariant>;
  /** Update one productSizeColorVariant */
  updateProductSizeColorVariant?: Maybe<ProductSizeColorVariant>;
  /** Delete one productSizeColorVariant from _all_ existing stages. Returns deleted document. */
  deleteProductSizeColorVariant?: Maybe<ProductSizeColorVariant>;
  /** Upsert one productSizeColorVariant */
  upsertProductSizeColorVariant?: Maybe<ProductSizeColorVariant>;
  /** Publish one productSizeColorVariant */
  publishProductSizeColorVariant?: Maybe<ProductSizeColorVariant>;
  /** Unpublish one productSizeColorVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProductSizeColorVariant?: Maybe<ProductSizeColorVariant>;
  /** Update many ProductSizeColorVariant documents */
  updateManyProductSizeColorVariantsConnection: ProductSizeColorVariantConnection;
  /** Delete many ProductSizeColorVariant documents, return deleted documents */
  deleteManyProductSizeColorVariantsConnection: ProductSizeColorVariantConnection;
  /** Publish many ProductSizeColorVariant documents */
  publishManyProductSizeColorVariantsConnection: ProductSizeColorVariantConnection;
  /** Find many ProductSizeColorVariant documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductSizeColorVariantsConnection: ProductSizeColorVariantConnection;
  /**
   * Update many productSizeColorVariants
   * @deprecated Please use the new paginated many mutation (updateManyProductSizeColorVariantsConnection)
   */
  updateManyProductSizeColorVariants: BatchPayload;
  /**
   * Delete many ProductSizeColorVariant documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductSizeColorVariantsConnection)
   */
  deleteManyProductSizeColorVariants: BatchPayload;
  /**
   * Publish many ProductSizeColorVariant documents
   * @deprecated Please use the new paginated many mutation (publishManyProductSizeColorVariantsConnection)
   */
  publishManyProductSizeColorVariants: BatchPayload;
  /**
   * Unpublish many ProductSizeColorVariant documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductSizeColorVariantsConnection)
   */
  unpublishManyProductSizeColorVariants: BatchPayload;
  /** Create one review */
  createReview?: Maybe<Review>;
  /** Update one review */
  updateReview?: Maybe<Review>;
  /** Delete one review from _all_ existing stages. Returns deleted document. */
  deleteReview?: Maybe<Review>;
  /** Upsert one review */
  upsertReview?: Maybe<Review>;
  /** Publish one review */
  publishReview?: Maybe<Review>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishReview?: Maybe<Review>;
  /** Update many Review documents */
  updateManyReviewsConnection: ReviewConnection;
  /** Delete many Review documents, return deleted documents */
  deleteManyReviewsConnection: ReviewConnection;
  /** Publish many Review documents */
  publishManyReviewsConnection: ReviewConnection;
  /** Find many Review documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyReviewsConnection: ReviewConnection;
  /**
   * Update many reviews
   * @deprecated Please use the new paginated many mutation (updateManyReviewsConnection)
   */
  updateManyReviews: BatchPayload;
  /**
   * Delete many Review documents
   * @deprecated Please use the new paginated many mutation (deleteManyReviewsConnection)
   */
  deleteManyReviews: BatchPayload;
  /**
   * Publish many Review documents
   * @deprecated Please use the new paginated many mutation (publishManyReviewsConnection)
   */
  publishManyReviews: BatchPayload;
  /**
   * Unpublish many Review documents
   * @deprecated Please use the new paginated many mutation (unpublishManyReviewsConnection)
   */
  unpublishManyReviews: BatchPayload;
  /** Create one order */
  createOrder?: Maybe<Order>;
  /** Update one order */
  updateOrder?: Maybe<Order>;
  /** Delete one order from _all_ existing stages. Returns deleted document. */
  deleteOrder?: Maybe<Order>;
  /** Upsert one order */
  upsertOrder?: Maybe<Order>;
  /** Publish one order */
  publishOrder?: Maybe<Order>;
  /** Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishOrder?: Maybe<Order>;
  /** Update many Order documents */
  updateManyOrdersConnection: OrderConnection;
  /** Delete many Order documents, return deleted documents */
  deleteManyOrdersConnection: OrderConnection;
  /** Publish many Order documents */
  publishManyOrdersConnection: OrderConnection;
  /** Find many Order documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyOrdersConnection: OrderConnection;
  /**
   * Update many orders
   * @deprecated Please use the new paginated many mutation (updateManyOrdersConnection)
   */
  updateManyOrders: BatchPayload;
  /**
   * Delete many Order documents
   * @deprecated Please use the new paginated many mutation (deleteManyOrdersConnection)
   */
  deleteManyOrders: BatchPayload;
  /**
   * Publish many Order documents
   * @deprecated Please use the new paginated many mutation (publishManyOrdersConnection)
   */
  publishManyOrders: BatchPayload;
  /**
   * Unpublish many Order documents
   * @deprecated Please use the new paginated many mutation (unpublishManyOrdersConnection)
   */
  unpublishManyOrders: BatchPayload;
  /** Create one orderItem */
  createOrderItem?: Maybe<OrderItem>;
  /** Update one orderItem */
  updateOrderItem?: Maybe<OrderItem>;
  /** Delete one orderItem from _all_ existing stages. Returns deleted document. */
  deleteOrderItem?: Maybe<OrderItem>;
  /** Upsert one orderItem */
  upsertOrderItem?: Maybe<OrderItem>;
  /** Publish one orderItem */
  publishOrderItem?: Maybe<OrderItem>;
  /** Unpublish one orderItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishOrderItem?: Maybe<OrderItem>;
  /** Update many OrderItem documents */
  updateManyOrderItemsConnection: OrderItemConnection;
  /** Delete many OrderItem documents, return deleted documents */
  deleteManyOrderItemsConnection: OrderItemConnection;
  /** Publish many OrderItem documents */
  publishManyOrderItemsConnection: OrderItemConnection;
  /** Find many OrderItem documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyOrderItemsConnection: OrderItemConnection;
  /**
   * Update many orderItems
   * @deprecated Please use the new paginated many mutation (updateManyOrderItemsConnection)
   */
  updateManyOrderItems: BatchPayload;
  /**
   * Delete many OrderItem documents
   * @deprecated Please use the new paginated many mutation (deleteManyOrderItemsConnection)
   */
  deleteManyOrderItems: BatchPayload;
  /**
   * Publish many OrderItem documents
   * @deprecated Please use the new paginated many mutation (publishManyOrderItemsConnection)
   */
  publishManyOrderItems: BatchPayload;
  /**
   * Unpublish many OrderItem documents
   * @deprecated Please use the new paginated many mutation (unpublishManyOrderItemsConnection)
   */
  unpublishManyOrderItems: BatchPayload;
};


export type MutationCreateCollectionArgs = {
  data: CollectionCreateInput;
};


export type MutationUpdateCollectionArgs = {
  where: CollectionWhereUniqueInput;
  data: CollectionUpdateInput;
};


export type MutationDeleteCollectionArgs = {
  where: CollectionWhereUniqueInput;
};


export type MutationUpsertCollectionArgs = {
  where: CollectionWhereUniqueInput;
  upsert: CollectionUpsertInput;
};


export type MutationPublishCollectionArgs = {
  where: CollectionWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishCollectionArgs = {
  where: CollectionWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyCollectionsConnectionArgs = {
  where?: Maybe<CollectionManyWhereInput>;
  data: CollectionUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyCollectionsConnectionArgs = {
  where?: Maybe<CollectionManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyCollectionsConnectionArgs = {
  where?: Maybe<CollectionManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyCollectionsConnectionArgs = {
  where?: Maybe<CollectionManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyCollectionsArgs = {
  where?: Maybe<CollectionManyWhereInput>;
  data: CollectionUpdateManyInput;
};


export type MutationDeleteManyCollectionsArgs = {
  where?: Maybe<CollectionManyWhereInput>;
};


export type MutationPublishManyCollectionsArgs = {
  where?: Maybe<CollectionManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyCollectionsArgs = {
  where?: Maybe<CollectionManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateCurrencyArgs = {
  data: CurrencyCreateInput;
};


export type MutationUpdateCurrencyArgs = {
  where: CurrencyWhereUniqueInput;
  data: CurrencyUpdateInput;
};


export type MutationDeleteCurrencyArgs = {
  where: CurrencyWhereUniqueInput;
};


export type MutationUpsertCurrencyArgs = {
  where: CurrencyWhereUniqueInput;
  upsert: CurrencyUpsertInput;
};


export type MutationPublishCurrencyArgs = {
  where: CurrencyWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishCurrencyArgs = {
  where: CurrencyWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyCurrenciesConnectionArgs = {
  where?: Maybe<CurrencyManyWhereInput>;
  data: CurrencyUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyCurrenciesConnectionArgs = {
  where?: Maybe<CurrencyManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyCurrenciesConnectionArgs = {
  where?: Maybe<CurrencyManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyCurrenciesConnectionArgs = {
  where?: Maybe<CurrencyManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyCurrenciesArgs = {
  where?: Maybe<CurrencyManyWhereInput>;
  data: CurrencyUpdateManyInput;
};


export type MutationDeleteManyCurrenciesArgs = {
  where?: Maybe<CurrencyManyWhereInput>;
};


export type MutationPublishManyCurrenciesArgs = {
  where?: Maybe<CurrencyManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyCurrenciesArgs = {
  where?: Maybe<CurrencyManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationUpdateCategoryArgs = {
  where: CategoryWhereUniqueInput;
  data: CategoryUpdateInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertCategoryArgs = {
  where: CategoryWhereUniqueInput;
  upsert: CategoryUpsertInput;
};


export type MutationPublishCategoryArgs = {
  where: CategoryWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishCategoryArgs = {
  where: CategoryWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyCategoriesConnectionArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  data: CategoryUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyCategoriesConnectionArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyCategoriesConnectionArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyCategoriesConnectionArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyCategoriesArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  data: CategoryUpdateManyInput;
};


export type MutationDeleteManyCategoriesArgs = {
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationPublishManyCategoriesArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyCategoriesArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationUpdateProductArgs = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateInput;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationUpsertProductArgs = {
  where: ProductWhereUniqueInput;
  upsert: ProductUpsertInput;
};


export type MutationPublishProductArgs = {
  where: ProductWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishProductArgs = {
  where: ProductWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyProductsConnectionArgs = {
  where?: Maybe<ProductManyWhereInput>;
  data: ProductUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyProductsConnectionArgs = {
  where?: Maybe<ProductManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyProductsConnectionArgs = {
  where?: Maybe<ProductManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyProductsConnectionArgs = {
  where?: Maybe<ProductManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyProductsArgs = {
  where?: Maybe<ProductManyWhereInput>;
  data: ProductUpdateManyInput;
};


export type MutationDeleteManyProductsArgs = {
  where?: Maybe<ProductManyWhereInput>;
};


export type MutationPublishManyProductsArgs = {
  where?: Maybe<ProductManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyProductsArgs = {
  where?: Maybe<ProductManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateProductColorVariantArgs = {
  data: ProductColorVariantCreateInput;
};


export type MutationUpdateProductColorVariantArgs = {
  where: ProductColorVariantWhereUniqueInput;
  data: ProductColorVariantUpdateInput;
};


export type MutationDeleteProductColorVariantArgs = {
  where: ProductColorVariantWhereUniqueInput;
};


export type MutationUpsertProductColorVariantArgs = {
  where: ProductColorVariantWhereUniqueInput;
  upsert: ProductColorVariantUpsertInput;
};


export type MutationPublishProductColorVariantArgs = {
  where: ProductColorVariantWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishProductColorVariantArgs = {
  where: ProductColorVariantWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyProductColorVariantsConnectionArgs = {
  where?: Maybe<ProductColorVariantManyWhereInput>;
  data: ProductColorVariantUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyProductColorVariantsConnectionArgs = {
  where?: Maybe<ProductColorVariantManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyProductColorVariantsConnectionArgs = {
  where?: Maybe<ProductColorVariantManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyProductColorVariantsConnectionArgs = {
  where?: Maybe<ProductColorVariantManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyProductColorVariantsArgs = {
  where?: Maybe<ProductColorVariantManyWhereInput>;
  data: ProductColorVariantUpdateManyInput;
};


export type MutationDeleteManyProductColorVariantsArgs = {
  where?: Maybe<ProductColorVariantManyWhereInput>;
};


export type MutationPublishManyProductColorVariantsArgs = {
  where?: Maybe<ProductColorVariantManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyProductColorVariantsArgs = {
  where?: Maybe<ProductColorVariantManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateProductSizeVariantArgs = {
  data: ProductSizeVariantCreateInput;
};


export type MutationUpdateProductSizeVariantArgs = {
  where: ProductSizeVariantWhereUniqueInput;
  data: ProductSizeVariantUpdateInput;
};


export type MutationDeleteProductSizeVariantArgs = {
  where: ProductSizeVariantWhereUniqueInput;
};


export type MutationUpsertProductSizeVariantArgs = {
  where: ProductSizeVariantWhereUniqueInput;
  upsert: ProductSizeVariantUpsertInput;
};


export type MutationPublishProductSizeVariantArgs = {
  where: ProductSizeVariantWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishProductSizeVariantArgs = {
  where: ProductSizeVariantWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyProductSizeVariantsConnectionArgs = {
  where?: Maybe<ProductSizeVariantManyWhereInput>;
  data: ProductSizeVariantUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyProductSizeVariantsConnectionArgs = {
  where?: Maybe<ProductSizeVariantManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyProductSizeVariantsConnectionArgs = {
  where?: Maybe<ProductSizeVariantManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyProductSizeVariantsConnectionArgs = {
  where?: Maybe<ProductSizeVariantManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyProductSizeVariantsArgs = {
  where?: Maybe<ProductSizeVariantManyWhereInput>;
  data: ProductSizeVariantUpdateManyInput;
};


export type MutationDeleteManyProductSizeVariantsArgs = {
  where?: Maybe<ProductSizeVariantManyWhereInput>;
};


export type MutationPublishManyProductSizeVariantsArgs = {
  where?: Maybe<ProductSizeVariantManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyProductSizeVariantsArgs = {
  where?: Maybe<ProductSizeVariantManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateProductSizeColorVariantArgs = {
  data: ProductSizeColorVariantCreateInput;
};


export type MutationUpdateProductSizeColorVariantArgs = {
  where: ProductSizeColorVariantWhereUniqueInput;
  data: ProductSizeColorVariantUpdateInput;
};


export type MutationDeleteProductSizeColorVariantArgs = {
  where: ProductSizeColorVariantWhereUniqueInput;
};


export type MutationUpsertProductSizeColorVariantArgs = {
  where: ProductSizeColorVariantWhereUniqueInput;
  upsert: ProductSizeColorVariantUpsertInput;
};


export type MutationPublishProductSizeColorVariantArgs = {
  where: ProductSizeColorVariantWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishProductSizeColorVariantArgs = {
  where: ProductSizeColorVariantWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyProductSizeColorVariantsConnectionArgs = {
  where?: Maybe<ProductSizeColorVariantManyWhereInput>;
  data: ProductSizeColorVariantUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyProductSizeColorVariantsConnectionArgs = {
  where?: Maybe<ProductSizeColorVariantManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyProductSizeColorVariantsConnectionArgs = {
  where?: Maybe<ProductSizeColorVariantManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyProductSizeColorVariantsConnectionArgs = {
  where?: Maybe<ProductSizeColorVariantManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyProductSizeColorVariantsArgs = {
  where?: Maybe<ProductSizeColorVariantManyWhereInput>;
  data: ProductSizeColorVariantUpdateManyInput;
};


export type MutationDeleteManyProductSizeColorVariantsArgs = {
  where?: Maybe<ProductSizeColorVariantManyWhereInput>;
};


export type MutationPublishManyProductSizeColorVariantsArgs = {
  where?: Maybe<ProductSizeColorVariantManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyProductSizeColorVariantsArgs = {
  where?: Maybe<ProductSizeColorVariantManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateReviewArgs = {
  data: ReviewCreateInput;
};


export type MutationUpdateReviewArgs = {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateInput;
};


export type MutationDeleteReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type MutationUpsertReviewArgs = {
  where: ReviewWhereUniqueInput;
  upsert: ReviewUpsertInput;
};


export type MutationPublishReviewArgs = {
  where: ReviewWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishReviewArgs = {
  where: ReviewWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyReviewsConnectionArgs = {
  where?: Maybe<ReviewManyWhereInput>;
  data: ReviewUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyReviewsConnectionArgs = {
  where?: Maybe<ReviewManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyReviewsConnectionArgs = {
  where?: Maybe<ReviewManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyReviewsConnectionArgs = {
  where?: Maybe<ReviewManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyReviewsArgs = {
  where?: Maybe<ReviewManyWhereInput>;
  data: ReviewUpdateManyInput;
};


export type MutationDeleteManyReviewsArgs = {
  where?: Maybe<ReviewManyWhereInput>;
};


export type MutationPublishManyReviewsArgs = {
  where?: Maybe<ReviewManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyReviewsArgs = {
  where?: Maybe<ReviewManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};


export type MutationUpdateOrderArgs = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateInput;
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationUpsertOrderArgs = {
  where: OrderWhereUniqueInput;
  upsert: OrderUpsertInput;
};


export type MutationPublishOrderArgs = {
  where: OrderWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishOrderArgs = {
  where: OrderWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyOrdersConnectionArgs = {
  where?: Maybe<OrderManyWhereInput>;
  data: OrderUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyOrdersConnectionArgs = {
  where?: Maybe<OrderManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyOrdersConnectionArgs = {
  where?: Maybe<OrderManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyOrdersConnectionArgs = {
  where?: Maybe<OrderManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyOrdersArgs = {
  where?: Maybe<OrderManyWhereInput>;
  data: OrderUpdateManyInput;
};


export type MutationDeleteManyOrdersArgs = {
  where?: Maybe<OrderManyWhereInput>;
};


export type MutationPublishManyOrdersArgs = {
  where?: Maybe<OrderManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyOrdersArgs = {
  where?: Maybe<OrderManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateOrderItemArgs = {
  data: OrderItemCreateInput;
};


export type MutationUpdateOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
  data: OrderItemUpdateInput;
};


export type MutationDeleteOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type MutationUpsertOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
  upsert: OrderItemUpsertInput;
};


export type MutationPublishOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyOrderItemsConnectionArgs = {
  where?: Maybe<OrderItemManyWhereInput>;
  data: OrderItemUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyOrderItemsConnectionArgs = {
  where?: Maybe<OrderItemManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyOrderItemsConnectionArgs = {
  where?: Maybe<OrderItemManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyOrderItemsConnectionArgs = {
  where?: Maybe<OrderItemManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyOrderItemsArgs = {
  where?: Maybe<OrderItemManyWhereInput>;
  data: OrderItemUpdateManyInput;
};


export type MutationDeleteManyOrderItemsArgs = {
  where?: Maybe<OrderItemManyWhereInput>;
};


export type MutationPublishManyOrderItemsArgs = {
  where?: Maybe<OrderItemManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyOrderItemsArgs = {
  where?: Maybe<OrderItemManyWhereInput>;
  from?: Array<Stage>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type Order = Node & {
  __typename?: 'Order';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Order>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  stripeCheckoutId: Scalars['String'];
  total: Scalars['Int'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  orderItems: Array<OrderItem>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of Order versions */
  history: Array<Version>;
};


export type OrderDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type OrderCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type OrderOrderItemsArgs = {
  where?: Maybe<OrderItemWhereInput>;
  orderBy?: Maybe<OrderItemOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type OrderUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type OrderPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type OrderHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type OrderConnectInput = {
  /** Document to connect */
  where: OrderWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<OrderEdge>;
  aggregate: Aggregate;
};

export type OrderCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  stripeCheckoutId: Scalars['String'];
  total: Scalars['Int'];
  orderItems?: Maybe<OrderItemCreateManyInlineInput>;
};

export type OrderCreateManyInlineInput = {
  /** Create and connect multiple existing Order documents */
  create?: Maybe<Array<OrderCreateInput>>;
  /** Connect multiple existing Order documents */
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type OrderCreateOneInlineInput = {
  /** Create and connect one Order document */
  create?: Maybe<OrderCreateInput>;
  /** Connect one existing Order document */
  connect?: Maybe<OrderWhereUniqueInput>;
};

/** An edge in a connection. */
export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** The item at the end of the edge. */
  node: Order;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type OrderItem = Node & {
  __typename?: 'OrderItem';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<OrderItem>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  quantity: Scalars['Int'];
  total: Scalars['Int'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  order?: Maybe<Order>;
  product?: Maybe<Product>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of OrderItem versions */
  history: Array<Version>;
};


export type OrderItemDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type OrderItemOrderArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type OrderItemProductArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type OrderItemCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type OrderItemUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type OrderItemPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type OrderItemHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type OrderItemConnectInput = {
  /** Document to connect */
  where: OrderItemWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type OrderItemConnection = {
  __typename?: 'OrderItemConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<OrderItemEdge>;
  aggregate: Aggregate;
};

export type OrderItemCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity: Scalars['Int'];
  total: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  order?: Maybe<OrderCreateOneInlineInput>;
  product?: Maybe<ProductCreateOneInlineInput>;
};

export type OrderItemCreateManyInlineInput = {
  /** Create and connect multiple existing OrderItem documents */
  create?: Maybe<Array<OrderItemCreateInput>>;
  /** Connect multiple existing OrderItem documents */
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
};

export type OrderItemCreateOneInlineInput = {
  /** Create and connect one OrderItem document */
  create?: Maybe<OrderItemCreateInput>;
  /** Connect one existing OrderItem document */
  connect?: Maybe<OrderItemWhereUniqueInput>;
};

/** An edge in a connection. */
export type OrderItemEdge = {
  __typename?: 'OrderItemEdge';
  /** The item at the end of the edge. */
  node: OrderItem;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type OrderItemManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<OrderItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<OrderItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<OrderItemWhereInput>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  quantity_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  quantity_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  quantity_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  quantity_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  quantity_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  quantity_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  quantity_gte?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  total_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  total_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  total_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  total_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  total_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  total_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  total_gte?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  order?: Maybe<OrderWhereInput>;
  product?: Maybe<ProductWhereInput>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum OrderItemOrderByInput {
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC'
}

export type OrderItemUpdateInput = {
  quantity?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderUpdateOneInlineInput>;
  product?: Maybe<ProductUpdateOneInlineInput>;
};

export type OrderItemUpdateManyInlineInput = {
  /** Create and connect multiple OrderItem documents */
  create?: Maybe<Array<OrderItemCreateInput>>;
  /** Connect multiple existing OrderItem documents */
  connect?: Maybe<Array<OrderItemConnectInput>>;
  /** Override currently-connected documents with multiple existing OrderItem documents */
  set?: Maybe<Array<OrderItemWhereUniqueInput>>;
  /** Update multiple OrderItem documents */
  update?: Maybe<Array<OrderItemUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple OrderItem documents */
  upsert?: Maybe<Array<OrderItemUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple OrderItem documents */
  disconnect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  /** Delete multiple OrderItem documents */
  delete?: Maybe<Array<OrderItemWhereUniqueInput>>;
};

export type OrderItemUpdateManyInput = {
  quantity?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type OrderItemUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: OrderItemWhereInput;
  /** Update many input */
  data: OrderItemUpdateManyInput;
};

export type OrderItemUpdateOneInlineInput = {
  /** Create and connect one OrderItem document */
  create?: Maybe<OrderItemCreateInput>;
  /** Update single OrderItem document */
  update?: Maybe<OrderItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single OrderItem document */
  upsert?: Maybe<OrderItemUpsertWithNestedWhereUniqueInput>;
  /** Connect existing OrderItem document */
  connect?: Maybe<OrderItemWhereUniqueInput>;
  /** Disconnect currently connected OrderItem document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected OrderItem document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type OrderItemUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: OrderItemWhereUniqueInput;
  /** Document to update */
  data: OrderItemUpdateInput;
};

export type OrderItemUpsertInput = {
  /** Create document if it didn't exist */
  create: OrderItemCreateInput;
  /** Update document if it exists */
  update: OrderItemUpdateInput;
};

export type OrderItemUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: OrderItemWhereUniqueInput;
  /** Upsert data */
  data: OrderItemUpsertInput;
};

/** Identifies documents */
export type OrderItemWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<OrderItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<OrderItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<OrderItemWhereInput>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  quantity_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  quantity_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  quantity_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  quantity_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  quantity_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  quantity_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  quantity_gte?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  total_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  total_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  total_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  total_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  total_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  total_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  total_gte?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  order?: Maybe<OrderWhereInput>;
  product?: Maybe<ProductWhereInput>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References OrderItem record uniquely */
export type OrderItemWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Identifies documents */
export type OrderManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<OrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<OrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<OrderWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>;
  stripeCheckoutId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  stripeCheckoutId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stripeCheckoutId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  stripeCheckoutId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  stripeCheckoutId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  stripeCheckoutId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  stripeCheckoutId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  stripeCheckoutId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  stripeCheckoutId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  stripeCheckoutId_not_ends_with?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  total_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  total_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  total_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  total_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  total_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  total_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  total_gte?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdBy?: Maybe<UserWhereInput>;
  orderItems_every?: Maybe<OrderItemWhereInput>;
  orderItems_some?: Maybe<OrderItemWhereInput>;
  orderItems_none?: Maybe<OrderItemWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum OrderOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  StripeCheckoutIdAsc = 'stripeCheckoutId_ASC',
  StripeCheckoutIdDesc = 'stripeCheckoutId_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type OrderUpdateInput = {
  email?: Maybe<Scalars['String']>;
  stripeCheckoutId?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  orderItems?: Maybe<OrderItemUpdateManyInlineInput>;
};

export type OrderUpdateManyInlineInput = {
  /** Create and connect multiple Order documents */
  create?: Maybe<Array<OrderCreateInput>>;
  /** Connect multiple existing Order documents */
  connect?: Maybe<Array<OrderConnectInput>>;
  /** Override currently-connected documents with multiple existing Order documents */
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  /** Update multiple Order documents */
  update?: Maybe<Array<OrderUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Order documents */
  upsert?: Maybe<Array<OrderUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Order documents */
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  /** Delete multiple Order documents */
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type OrderUpdateManyInput = {
  email?: Maybe<Scalars['String']>;
  stripeCheckoutId?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
};

export type OrderUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: OrderWhereInput;
  /** Update many input */
  data: OrderUpdateManyInput;
};

export type OrderUpdateOneInlineInput = {
  /** Create and connect one Order document */
  create?: Maybe<OrderCreateInput>;
  /** Update single Order document */
  update?: Maybe<OrderUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Order document */
  upsert?: Maybe<OrderUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Order document */
  connect?: Maybe<OrderWhereUniqueInput>;
  /** Disconnect currently connected Order document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Order document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type OrderUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: OrderWhereUniqueInput;
  /** Document to update */
  data: OrderUpdateInput;
};

export type OrderUpsertInput = {
  /** Create document if it didn't exist */
  create: OrderCreateInput;
  /** Update document if it exists */
  update: OrderUpdateInput;
};

export type OrderUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: OrderWhereUniqueInput;
  /** Upsert data */
  data: OrderUpsertInput;
};

/** Identifies documents */
export type OrderWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<OrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<OrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<OrderWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>;
  stripeCheckoutId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  stripeCheckoutId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stripeCheckoutId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  stripeCheckoutId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  stripeCheckoutId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  stripeCheckoutId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  stripeCheckoutId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  stripeCheckoutId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  stripeCheckoutId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  stripeCheckoutId_not_ends_with?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  total_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  total_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  total_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  total_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  total_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  total_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  total_gte?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdBy?: Maybe<UserWhereInput>;
  orderItems_every?: Maybe<OrderItemWhereInput>;
  orderItems_some?: Maybe<OrderItemWhereInput>;
  orderItems_none?: Maybe<OrderItemWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References Order record uniquely */
export type OrderWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type Product = Node & {
  __typename?: 'Product';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Product>;
  /** Get the document in other stages */
  documentInStages: Array<Product>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  price: Scalars['Int'];
  slug: Scalars['String'];
  name: Scalars['String'];
  collections: Array<Collection>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  images: Array<Asset>;
  categories: Array<Category>;
  reviews: Array<Review>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  orderItems: Array<OrderItem>;
  variants: Array<ProductVariants>;
  /** List of Product versions */
  history: Array<Version>;
};


export type ProductLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type ProductDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ProductCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductCollectionsArgs = {
  where?: Maybe<CollectionWhereInput>;
  orderBy?: Maybe<CollectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ProductCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductImagesArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ProductCategoriesArgs = {
  where?: Maybe<CategoryWhereInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ProductReviewsArgs = {
  where?: Maybe<ReviewWhereInput>;
  orderBy?: Maybe<ReviewOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ProductPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductOrderItemsArgs = {
  where?: Maybe<OrderItemWhereInput>;
  orderBy?: Maybe<OrderItemOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ProductVariantsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ProductHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export enum ProductColor {
  Black = 'BLACK',
  Pink = 'PINK',
  Purple = 'PURPLE'
}

export type ProductColorVariant = Node & {
  __typename?: 'ProductColorVariant';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ProductColorVariant>;
  /** Get the document in other stages */
  documentInStages: Array<ProductColorVariant>;
  name: Scalars['String'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  color: ProductColor;
  product?: Maybe<Product>;
  /** List of ProductColorVariant versions */
  history: Array<Version>;
};


export type ProductColorVariantLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type ProductColorVariantDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ProductColorVariantCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductColorVariantUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductColorVariantPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductColorVariantCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductColorVariantUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductColorVariantPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductColorVariantProductArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductColorVariantHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ProductColorVariantConnectInput = {
  /** Document to connect */
  where: ProductColorVariantWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ProductColorVariantConnection = {
  __typename?: 'ProductColorVariantConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ProductColorVariantEdge>;
  aggregate: Aggregate;
};

export type ProductColorVariantCreateInput = {
  /** name input for default locale (en) */
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  color: ProductColor;
  product?: Maybe<ProductCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<ProductColorVariantCreateLocalizationsInput>;
};

export type ProductColorVariantCreateLocalizationDataInput = {
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductColorVariantCreateLocalizationInput = {
  /** Localization input */
  data: ProductColorVariantCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductColorVariantCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<ProductColorVariantCreateLocalizationInput>>;
};

export type ProductColorVariantCreateManyInlineInput = {
  /** Create and connect multiple existing ProductColorVariant documents */
  create?: Maybe<Array<ProductColorVariantCreateInput>>;
  /** Connect multiple existing ProductColorVariant documents */
  connect?: Maybe<Array<ProductColorVariantWhereUniqueInput>>;
};

export type ProductColorVariantCreateOneInlineInput = {
  /** Create and connect one ProductColorVariant document */
  create?: Maybe<ProductColorVariantCreateInput>;
  /** Connect one existing ProductColorVariant document */
  connect?: Maybe<ProductColorVariantWhereUniqueInput>;
};

/** An edge in a connection. */
export type ProductColorVariantEdge = {
  __typename?: 'ProductColorVariantEdge';
  /** The item at the end of the edge. */
  node: ProductColorVariant;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ProductColorVariantManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProductColorVariantWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProductColorVariantWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProductColorVariantWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  color?: Maybe<ProductColor>;
  /** All values that are not equal to given value. */
  color_not?: Maybe<ProductColor>;
  /** All values that are contained in given list. */
  color_in?: Maybe<Array<ProductColor>>;
  /** All values that are not contained in given list. */
  color_not_in?: Maybe<Array<ProductColor>>;
  product?: Maybe<ProductWhereInput>;
};

export enum ProductColorVariantOrderByInput {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC'
}

export type ProductColorVariantUpdateInput = {
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  color?: Maybe<ProductColor>;
  product?: Maybe<ProductUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<ProductColorVariantUpdateLocalizationsInput>;
};

export type ProductColorVariantUpdateLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type ProductColorVariantUpdateLocalizationInput = {
  data: ProductColorVariantUpdateLocalizationDataInput;
  locale: Locale;
};

export type ProductColorVariantUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<ProductColorVariantCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<ProductColorVariantUpdateLocalizationInput>>;
  upsert?: Maybe<Array<ProductColorVariantUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type ProductColorVariantUpdateManyInlineInput = {
  /** Create and connect multiple ProductColorVariant documents */
  create?: Maybe<Array<ProductColorVariantCreateInput>>;
  /** Connect multiple existing ProductColorVariant documents */
  connect?: Maybe<Array<ProductColorVariantConnectInput>>;
  /** Override currently-connected documents with multiple existing ProductColorVariant documents */
  set?: Maybe<Array<ProductColorVariantWhereUniqueInput>>;
  /** Update multiple ProductColorVariant documents */
  update?: Maybe<Array<ProductColorVariantUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductColorVariant documents */
  upsert?: Maybe<Array<ProductColorVariantUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ProductColorVariant documents */
  disconnect?: Maybe<Array<ProductColorVariantWhereUniqueInput>>;
  /** Delete multiple ProductColorVariant documents */
  delete?: Maybe<Array<ProductColorVariantWhereUniqueInput>>;
};

export type ProductColorVariantUpdateManyInput = {
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  color?: Maybe<ProductColor>;
  /** Optional updates to localizations */
  localizations?: Maybe<ProductColorVariantUpdateManyLocalizationsInput>;
};

export type ProductColorVariantUpdateManyLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type ProductColorVariantUpdateManyLocalizationInput = {
  data: ProductColorVariantUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ProductColorVariantUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<ProductColorVariantUpdateManyLocalizationInput>>;
};

export type ProductColorVariantUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ProductColorVariantWhereInput;
  /** Update many input */
  data: ProductColorVariantUpdateManyInput;
};

export type ProductColorVariantUpdateOneInlineInput = {
  /** Create and connect one ProductColorVariant document */
  create?: Maybe<ProductColorVariantCreateInput>;
  /** Update single ProductColorVariant document */
  update?: Maybe<ProductColorVariantUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductColorVariant document */
  upsert?: Maybe<ProductColorVariantUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ProductColorVariant document */
  connect?: Maybe<ProductColorVariantWhereUniqueInput>;
  /** Disconnect currently connected ProductColorVariant document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ProductColorVariant document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ProductColorVariantUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProductColorVariantWhereUniqueInput;
  /** Document to update */
  data: ProductColorVariantUpdateInput;
};

export type ProductColorVariantUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductColorVariantCreateInput;
  /** Update document if it exists */
  update: ProductColorVariantUpdateInput;
};

export type ProductColorVariantUpsertLocalizationInput = {
  update: ProductColorVariantUpdateLocalizationDataInput;
  create: ProductColorVariantCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductColorVariantUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProductColorVariantWhereUniqueInput;
  /** Upsert data */
  data: ProductColorVariantUpsertInput;
};

/** Identifies documents */
export type ProductColorVariantWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProductColorVariantWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProductColorVariantWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProductColorVariantWhereInput>>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  color?: Maybe<ProductColor>;
  /** All values that are not equal to given value. */
  color_not?: Maybe<ProductColor>;
  /** All values that are contained in given list. */
  color_in?: Maybe<Array<ProductColor>>;
  /** All values that are not contained in given list. */
  color_not_in?: Maybe<Array<ProductColor>>;
  product?: Maybe<ProductWhereInput>;
};

/** References ProductColorVariant record uniquely */
export type ProductColorVariantWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ProductConnectInput = {
  /** Document to connect */
  where: ProductWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ProductEdge>;
  aggregate: Aggregate;
};

export type ProductCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** description input for default locale (en) */
  description: Scalars['String'];
  /** price input for default locale (en) */
  price: Scalars['Int'];
  /** slug input for default locale (en) */
  slug: Scalars['String'];
  /** name input for default locale (en) */
  name: Scalars['String'];
  collections?: Maybe<CollectionCreateManyInlineInput>;
  images?: Maybe<AssetCreateManyInlineInput>;
  categories?: Maybe<CategoryCreateManyInlineInput>;
  reviews?: Maybe<ReviewCreateManyInlineInput>;
  orderItems?: Maybe<OrderItemCreateManyInlineInput>;
  variants?: Maybe<ProductVariantsCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<ProductCreateLocalizationsInput>;
};

export type ProductCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  price: Scalars['Int'];
  slug: Scalars['String'];
  name: Scalars['String'];
};

export type ProductCreateLocalizationInput = {
  /** Localization input */
  data: ProductCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<ProductCreateLocalizationInput>>;
};

export type ProductCreateManyInlineInput = {
  /** Create and connect multiple existing Product documents */
  create?: Maybe<Array<ProductCreateInput>>;
  /** Connect multiple existing Product documents */
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
};

export type ProductCreateOneInlineInput = {
  /** Create and connect one Product document */
  create?: Maybe<ProductCreateInput>;
  /** Connect one existing Product document */
  connect?: Maybe<ProductWhereUniqueInput>;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** The item at the end of the edge. */
  node: Product;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ProductManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProductWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  collections_every?: Maybe<CollectionWhereInput>;
  collections_some?: Maybe<CollectionWhereInput>;
  collections_none?: Maybe<CollectionWhereInput>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  images_every?: Maybe<AssetWhereInput>;
  images_some?: Maybe<AssetWhereInput>;
  images_none?: Maybe<AssetWhereInput>;
  categories_every?: Maybe<CategoryWhereInput>;
  categories_some?: Maybe<CategoryWhereInput>;
  categories_none?: Maybe<CategoryWhereInput>;
  reviews_every?: Maybe<ReviewWhereInput>;
  reviews_some?: Maybe<ReviewWhereInput>;
  reviews_none?: Maybe<ReviewWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  orderItems_every?: Maybe<OrderItemWhereInput>;
  orderItems_some?: Maybe<OrderItemWhereInput>;
  orderItems_none?: Maybe<OrderItemWhereInput>;
};

export enum ProductOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export enum ProductSize {
  Xs = 'XS',
  Small = 'SMALL',
  Medium = 'MEDIUM',
  Large = 'LARGE',
  Xl = 'XL'
}

export type ProductSizeColorVariant = Node & {
  __typename?: 'ProductSizeColorVariant';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ProductSizeColorVariant>;
  /** Get the document in other stages */
  documentInStages: Array<ProductSizeColorVariant>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  size: ProductSize;
  color: ProductColor;
  product?: Maybe<Product>;
  /** List of ProductSizeColorVariant versions */
  history: Array<Version>;
};


export type ProductSizeColorVariantLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type ProductSizeColorVariantDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ProductSizeColorVariantUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductSizeColorVariantCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductSizeColorVariantPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductSizeColorVariantUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductSizeColorVariantPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductSizeColorVariantCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductSizeColorVariantProductArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductSizeColorVariantHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ProductSizeColorVariantConnectInput = {
  /** Document to connect */
  where: ProductSizeColorVariantWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ProductSizeColorVariantConnection = {
  __typename?: 'ProductSizeColorVariantConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ProductSizeColorVariantEdge>;
  aggregate: Aggregate;
};

export type ProductSizeColorVariantCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** name input for default locale (en) */
  name: Scalars['String'];
  size: ProductSize;
  color: ProductColor;
  product?: Maybe<ProductCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<ProductSizeColorVariantCreateLocalizationsInput>;
};

export type ProductSizeColorVariantCreateLocalizationDataInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
};

export type ProductSizeColorVariantCreateLocalizationInput = {
  /** Localization input */
  data: ProductSizeColorVariantCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductSizeColorVariantCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<ProductSizeColorVariantCreateLocalizationInput>>;
};

export type ProductSizeColorVariantCreateManyInlineInput = {
  /** Create and connect multiple existing ProductSizeColorVariant documents */
  create?: Maybe<Array<ProductSizeColorVariantCreateInput>>;
  /** Connect multiple existing ProductSizeColorVariant documents */
  connect?: Maybe<Array<ProductSizeColorVariantWhereUniqueInput>>;
};

export type ProductSizeColorVariantCreateOneInlineInput = {
  /** Create and connect one ProductSizeColorVariant document */
  create?: Maybe<ProductSizeColorVariantCreateInput>;
  /** Connect one existing ProductSizeColorVariant document */
  connect?: Maybe<ProductSizeColorVariantWhereUniqueInput>;
};

/** An edge in a connection. */
export type ProductSizeColorVariantEdge = {
  __typename?: 'ProductSizeColorVariantEdge';
  /** The item at the end of the edge. */
  node: ProductSizeColorVariant;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ProductSizeColorVariantManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProductSizeColorVariantWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProductSizeColorVariantWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProductSizeColorVariantWhereInput>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  createdBy?: Maybe<UserWhereInput>;
  size?: Maybe<ProductSize>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<ProductSize>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<ProductSize>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<ProductSize>>;
  color?: Maybe<ProductColor>;
  /** All values that are not equal to given value. */
  color_not?: Maybe<ProductColor>;
  /** All values that are contained in given list. */
  color_in?: Maybe<Array<ProductColor>>;
  /** All values that are not contained in given list. */
  color_not_in?: Maybe<Array<ProductColor>>;
  product?: Maybe<ProductWhereInput>;
};

export enum ProductSizeColorVariantOrderByInput {
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC'
}

export type ProductSizeColorVariantUpdateInput = {
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  size?: Maybe<ProductSize>;
  color?: Maybe<ProductColor>;
  product?: Maybe<ProductUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<ProductSizeColorVariantUpdateLocalizationsInput>;
};

export type ProductSizeColorVariantUpdateLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type ProductSizeColorVariantUpdateLocalizationInput = {
  data: ProductSizeColorVariantUpdateLocalizationDataInput;
  locale: Locale;
};

export type ProductSizeColorVariantUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<ProductSizeColorVariantCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<ProductSizeColorVariantUpdateLocalizationInput>>;
  upsert?: Maybe<Array<ProductSizeColorVariantUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type ProductSizeColorVariantUpdateManyInlineInput = {
  /** Create and connect multiple ProductSizeColorVariant documents */
  create?: Maybe<Array<ProductSizeColorVariantCreateInput>>;
  /** Connect multiple existing ProductSizeColorVariant documents */
  connect?: Maybe<Array<ProductSizeColorVariantConnectInput>>;
  /** Override currently-connected documents with multiple existing ProductSizeColorVariant documents */
  set?: Maybe<Array<ProductSizeColorVariantWhereUniqueInput>>;
  /** Update multiple ProductSizeColorVariant documents */
  update?: Maybe<Array<ProductSizeColorVariantUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductSizeColorVariant documents */
  upsert?: Maybe<Array<ProductSizeColorVariantUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ProductSizeColorVariant documents */
  disconnect?: Maybe<Array<ProductSizeColorVariantWhereUniqueInput>>;
  /** Delete multiple ProductSizeColorVariant documents */
  delete?: Maybe<Array<ProductSizeColorVariantWhereUniqueInput>>;
};

export type ProductSizeColorVariantUpdateManyInput = {
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  size?: Maybe<ProductSize>;
  color?: Maybe<ProductColor>;
  /** Optional updates to localizations */
  localizations?: Maybe<ProductSizeColorVariantUpdateManyLocalizationsInput>;
};

export type ProductSizeColorVariantUpdateManyLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type ProductSizeColorVariantUpdateManyLocalizationInput = {
  data: ProductSizeColorVariantUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ProductSizeColorVariantUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<ProductSizeColorVariantUpdateManyLocalizationInput>>;
};

export type ProductSizeColorVariantUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ProductSizeColorVariantWhereInput;
  /** Update many input */
  data: ProductSizeColorVariantUpdateManyInput;
};

export type ProductSizeColorVariantUpdateOneInlineInput = {
  /** Create and connect one ProductSizeColorVariant document */
  create?: Maybe<ProductSizeColorVariantCreateInput>;
  /** Update single ProductSizeColorVariant document */
  update?: Maybe<ProductSizeColorVariantUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductSizeColorVariant document */
  upsert?: Maybe<ProductSizeColorVariantUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ProductSizeColorVariant document */
  connect?: Maybe<ProductSizeColorVariantWhereUniqueInput>;
  /** Disconnect currently connected ProductSizeColorVariant document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ProductSizeColorVariant document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ProductSizeColorVariantUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProductSizeColorVariantWhereUniqueInput;
  /** Document to update */
  data: ProductSizeColorVariantUpdateInput;
};

export type ProductSizeColorVariantUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductSizeColorVariantCreateInput;
  /** Update document if it exists */
  update: ProductSizeColorVariantUpdateInput;
};

export type ProductSizeColorVariantUpsertLocalizationInput = {
  update: ProductSizeColorVariantUpdateLocalizationDataInput;
  create: ProductSizeColorVariantCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductSizeColorVariantUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProductSizeColorVariantWhereUniqueInput;
  /** Upsert data */
  data: ProductSizeColorVariantUpsertInput;
};

/** Identifies documents */
export type ProductSizeColorVariantWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProductSizeColorVariantWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProductSizeColorVariantWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProductSizeColorVariantWhereInput>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  createdBy?: Maybe<UserWhereInput>;
  size?: Maybe<ProductSize>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<ProductSize>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<ProductSize>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<ProductSize>>;
  color?: Maybe<ProductColor>;
  /** All values that are not equal to given value. */
  color_not?: Maybe<ProductColor>;
  /** All values that are contained in given list. */
  color_in?: Maybe<Array<ProductColor>>;
  /** All values that are not contained in given list. */
  color_not_in?: Maybe<Array<ProductColor>>;
  product?: Maybe<ProductWhereInput>;
};

/** References ProductSizeColorVariant record uniquely */
export type ProductSizeColorVariantWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ProductSizeVariant = Node & {
  __typename?: 'ProductSizeVariant';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ProductSizeVariant>;
  /** Get the document in other stages */
  documentInStages: Array<ProductSizeVariant>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  size: ProductSize;
  product?: Maybe<Product>;
  /** List of ProductSizeVariant versions */
  history: Array<Version>;
};


export type ProductSizeVariantLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type ProductSizeVariantDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ProductSizeVariantUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductSizeVariantPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductSizeVariantCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductSizeVariantCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductSizeVariantUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductSizeVariantPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductSizeVariantProductArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductSizeVariantHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ProductSizeVariantConnectInput = {
  /** Document to connect */
  where: ProductSizeVariantWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ProductSizeVariantConnection = {
  __typename?: 'ProductSizeVariantConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ProductSizeVariantEdge>;
  aggregate: Aggregate;
};

export type ProductSizeVariantCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** name input for default locale (en) */
  name: Scalars['String'];
  size: ProductSize;
  product?: Maybe<ProductCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<ProductSizeVariantCreateLocalizationsInput>;
};

export type ProductSizeVariantCreateLocalizationDataInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
};

export type ProductSizeVariantCreateLocalizationInput = {
  /** Localization input */
  data: ProductSizeVariantCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductSizeVariantCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<ProductSizeVariantCreateLocalizationInput>>;
};

export type ProductSizeVariantCreateManyInlineInput = {
  /** Create and connect multiple existing ProductSizeVariant documents */
  create?: Maybe<Array<ProductSizeVariantCreateInput>>;
  /** Connect multiple existing ProductSizeVariant documents */
  connect?: Maybe<Array<ProductSizeVariantWhereUniqueInput>>;
};

export type ProductSizeVariantCreateOneInlineInput = {
  /** Create and connect one ProductSizeVariant document */
  create?: Maybe<ProductSizeVariantCreateInput>;
  /** Connect one existing ProductSizeVariant document */
  connect?: Maybe<ProductSizeVariantWhereUniqueInput>;
};

/** An edge in a connection. */
export type ProductSizeVariantEdge = {
  __typename?: 'ProductSizeVariantEdge';
  /** The item at the end of the edge. */
  node: ProductSizeVariant;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ProductSizeVariantManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProductSizeVariantWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProductSizeVariantWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProductSizeVariantWhereInput>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  size?: Maybe<ProductSize>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<ProductSize>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<ProductSize>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<ProductSize>>;
  product?: Maybe<ProductWhereInput>;
};

export enum ProductSizeVariantOrderByInput {
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC'
}

export type ProductSizeVariantUpdateInput = {
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  size?: Maybe<ProductSize>;
  product?: Maybe<ProductUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<ProductSizeVariantUpdateLocalizationsInput>;
};

export type ProductSizeVariantUpdateLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type ProductSizeVariantUpdateLocalizationInput = {
  data: ProductSizeVariantUpdateLocalizationDataInput;
  locale: Locale;
};

export type ProductSizeVariantUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<ProductSizeVariantCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<ProductSizeVariantUpdateLocalizationInput>>;
  upsert?: Maybe<Array<ProductSizeVariantUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type ProductSizeVariantUpdateManyInlineInput = {
  /** Create and connect multiple ProductSizeVariant documents */
  create?: Maybe<Array<ProductSizeVariantCreateInput>>;
  /** Connect multiple existing ProductSizeVariant documents */
  connect?: Maybe<Array<ProductSizeVariantConnectInput>>;
  /** Override currently-connected documents with multiple existing ProductSizeVariant documents */
  set?: Maybe<Array<ProductSizeVariantWhereUniqueInput>>;
  /** Update multiple ProductSizeVariant documents */
  update?: Maybe<Array<ProductSizeVariantUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductSizeVariant documents */
  upsert?: Maybe<Array<ProductSizeVariantUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ProductSizeVariant documents */
  disconnect?: Maybe<Array<ProductSizeVariantWhereUniqueInput>>;
  /** Delete multiple ProductSizeVariant documents */
  delete?: Maybe<Array<ProductSizeVariantWhereUniqueInput>>;
};

export type ProductSizeVariantUpdateManyInput = {
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  size?: Maybe<ProductSize>;
  /** Optional updates to localizations */
  localizations?: Maybe<ProductSizeVariantUpdateManyLocalizationsInput>;
};

export type ProductSizeVariantUpdateManyLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type ProductSizeVariantUpdateManyLocalizationInput = {
  data: ProductSizeVariantUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ProductSizeVariantUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<ProductSizeVariantUpdateManyLocalizationInput>>;
};

export type ProductSizeVariantUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ProductSizeVariantWhereInput;
  /** Update many input */
  data: ProductSizeVariantUpdateManyInput;
};

export type ProductSizeVariantUpdateOneInlineInput = {
  /** Create and connect one ProductSizeVariant document */
  create?: Maybe<ProductSizeVariantCreateInput>;
  /** Update single ProductSizeVariant document */
  update?: Maybe<ProductSizeVariantUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductSizeVariant document */
  upsert?: Maybe<ProductSizeVariantUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ProductSizeVariant document */
  connect?: Maybe<ProductSizeVariantWhereUniqueInput>;
  /** Disconnect currently connected ProductSizeVariant document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ProductSizeVariant document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ProductSizeVariantUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProductSizeVariantWhereUniqueInput;
  /** Document to update */
  data: ProductSizeVariantUpdateInput;
};

export type ProductSizeVariantUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductSizeVariantCreateInput;
  /** Update document if it exists */
  update: ProductSizeVariantUpdateInput;
};

export type ProductSizeVariantUpsertLocalizationInput = {
  update: ProductSizeVariantUpdateLocalizationDataInput;
  create: ProductSizeVariantCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductSizeVariantUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProductSizeVariantWhereUniqueInput;
  /** Upsert data */
  data: ProductSizeVariantUpsertInput;
};

/** Identifies documents */
export type ProductSizeVariantWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProductSizeVariantWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProductSizeVariantWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProductSizeVariantWhereInput>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  size?: Maybe<ProductSize>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<ProductSize>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<ProductSize>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<ProductSize>>;
  product?: Maybe<ProductWhereInput>;
};

/** References ProductSizeVariant record uniquely */
export type ProductSizeVariantWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ProductUpdateInput = {
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  /** price input for default locale (en) */
  price?: Maybe<Scalars['Int']>;
  /** slug input for default locale (en) */
  slug?: Maybe<Scalars['String']>;
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  collections?: Maybe<CollectionUpdateManyInlineInput>;
  images?: Maybe<AssetUpdateManyInlineInput>;
  categories?: Maybe<CategoryUpdateManyInlineInput>;
  reviews?: Maybe<ReviewUpdateManyInlineInput>;
  orderItems?: Maybe<OrderItemUpdateManyInlineInput>;
  variants?: Maybe<ProductVariantsUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<ProductUpdateLocalizationsInput>;
};

export type ProductUpdateLocalizationDataInput = {
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductUpdateLocalizationInput = {
  data: ProductUpdateLocalizationDataInput;
  locale: Locale;
};

export type ProductUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<ProductCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<ProductUpdateLocalizationInput>>;
  upsert?: Maybe<Array<ProductUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type ProductUpdateManyInlineInput = {
  /** Create and connect multiple Product documents */
  create?: Maybe<Array<ProductCreateInput>>;
  /** Connect multiple existing Product documents */
  connect?: Maybe<Array<ProductConnectInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set?: Maybe<Array<ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update?: Maybe<Array<ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert?: Maybe<Array<ProductUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>;
  /** Delete multiple Product documents */
  delete?: Maybe<Array<ProductWhereUniqueInput>>;
};

export type ProductUpdateManyInput = {
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  /** price input for default locale (en) */
  price?: Maybe<Scalars['Int']>;
  /** Optional updates to localizations */
  localizations?: Maybe<ProductUpdateManyLocalizationsInput>;
};

export type ProductUpdateManyLocalizationDataInput = {
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type ProductUpdateManyLocalizationInput = {
  data: ProductUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ProductUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<ProductUpdateManyLocalizationInput>>;
};

export type ProductUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ProductWhereInput;
  /** Update many input */
  data: ProductUpdateManyInput;
};

export type ProductUpdateOneInlineInput = {
  /** Create and connect one Product document */
  create?: Maybe<ProductCreateInput>;
  /** Update single Product document */
  update?: Maybe<ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert?: Maybe<ProductUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Product document */
  connect?: Maybe<ProductWhereUniqueInput>;
  /** Disconnect currently connected Product document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Product document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ProductUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProductWhereUniqueInput;
  /** Document to update */
  data: ProductUpdateInput;
};

export type ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductCreateInput;
  /** Update document if it exists */
  update: ProductUpdateInput;
};

export type ProductUpsertLocalizationInput = {
  update: ProductUpdateLocalizationDataInput;
  create: ProductCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProductWhereUniqueInput;
  /** Upsert data */
  data: ProductUpsertInput;
};

export type ProductVariants = ProductColorVariant | ProductSizeColorVariant | ProductSizeVariant;

export type ProductVariantsConnectInput = {
  ProductColorVariant?: Maybe<ProductColorVariantConnectInput>;
  ProductSizeVariant?: Maybe<ProductSizeVariantConnectInput>;
  ProductSizeColorVariant?: Maybe<ProductSizeColorVariantConnectInput>;
};

export type ProductVariantsCreateInput = {
  ProductColorVariant?: Maybe<ProductColorVariantCreateInput>;
  ProductSizeVariant?: Maybe<ProductSizeVariantCreateInput>;
  ProductSizeColorVariant?: Maybe<ProductSizeColorVariantCreateInput>;
};

export type ProductVariantsCreateManyInlineInput = {
  /** Create and connect multiple existing ProductVariants documents */
  create?: Maybe<Array<ProductVariantsCreateInput>>;
  /** Connect multiple existing ProductVariants documents */
  connect?: Maybe<Array<ProductVariantsWhereUniqueInput>>;
};

export type ProductVariantsCreateOneInlineInput = {
  /** Create and connect one ProductVariants document */
  create?: Maybe<ProductVariantsCreateInput>;
  /** Connect one existing ProductVariants document */
  connect?: Maybe<ProductVariantsWhereUniqueInput>;
};

export type ProductVariantsUpdateInput = {
  ProductColorVariant?: Maybe<ProductColorVariantUpdateInput>;
  ProductSizeVariant?: Maybe<ProductSizeVariantUpdateInput>;
  ProductSizeColorVariant?: Maybe<ProductSizeColorVariantUpdateInput>;
};

export type ProductVariantsUpdateManyInlineInput = {
  /** Create and connect multiple ProductVariants documents */
  create?: Maybe<Array<ProductVariantsCreateInput>>;
  /** Connect multiple existing ProductVariants documents */
  connect?: Maybe<Array<ProductVariantsConnectInput>>;
  /** Override currently-connected documents with multiple existing ProductVariants documents */
  set?: Maybe<Array<ProductVariantsWhereUniqueInput>>;
  /** Update multiple ProductVariants documents */
  update?: Maybe<Array<ProductVariantsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductVariants documents */
  upsert?: Maybe<Array<ProductVariantsUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ProductVariants documents */
  disconnect?: Maybe<Array<ProductVariantsWhereUniqueInput>>;
  /** Delete multiple ProductVariants documents */
  delete?: Maybe<Array<ProductVariantsWhereUniqueInput>>;
};

export type ProductVariantsUpdateManyWithNestedWhereInput = {
  ProductColorVariant?: Maybe<ProductColorVariantUpdateManyWithNestedWhereInput>;
  ProductSizeVariant?: Maybe<ProductSizeVariantUpdateManyWithNestedWhereInput>;
  ProductSizeColorVariant?: Maybe<ProductSizeColorVariantUpdateManyWithNestedWhereInput>;
};

export type ProductVariantsUpdateOneInlineInput = {
  /** Create and connect one ProductVariants document */
  create?: Maybe<ProductVariantsCreateInput>;
  /** Update single ProductVariants document */
  update?: Maybe<ProductVariantsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductVariants document */
  upsert?: Maybe<ProductVariantsUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ProductVariants document */
  connect?: Maybe<ProductVariantsWhereUniqueInput>;
  /** Disconnect currently connected ProductVariants document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ProductVariants document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ProductVariantsUpdateWithNestedWhereUniqueInput = {
  ProductColorVariant?: Maybe<ProductColorVariantUpdateWithNestedWhereUniqueInput>;
  ProductSizeVariant?: Maybe<ProductSizeVariantUpdateWithNestedWhereUniqueInput>;
  ProductSizeColorVariant?: Maybe<ProductSizeColorVariantUpdateWithNestedWhereUniqueInput>;
};

export type ProductVariantsUpsertWithNestedWhereUniqueInput = {
  ProductColorVariant?: Maybe<ProductColorVariantUpsertWithNestedWhereUniqueInput>;
  ProductSizeVariant?: Maybe<ProductSizeVariantUpsertWithNestedWhereUniqueInput>;
  ProductSizeColorVariant?: Maybe<ProductSizeColorVariantUpsertWithNestedWhereUniqueInput>;
};

export type ProductVariantsWhereInput = {
  ProductColorVariant?: Maybe<ProductColorVariantWhereInput>;
  ProductSizeVariant?: Maybe<ProductSizeVariantWhereInput>;
  ProductSizeColorVariant?: Maybe<ProductSizeColorVariantWhereInput>;
};

export type ProductVariantsWhereUniqueInput = {
  ProductColorVariant?: Maybe<ProductColorVariantWhereUniqueInput>;
  ProductSizeVariant?: Maybe<ProductSizeVariantWhereUniqueInput>;
  ProductSizeColorVariant?: Maybe<ProductSizeColorVariantWhereUniqueInput>;
};

/** Identifies documents */
export type ProductWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProductWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  price_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  collections_every?: Maybe<CollectionWhereInput>;
  collections_some?: Maybe<CollectionWhereInput>;
  collections_none?: Maybe<CollectionWhereInput>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  images_every?: Maybe<AssetWhereInput>;
  images_some?: Maybe<AssetWhereInput>;
  images_none?: Maybe<AssetWhereInput>;
  categories_every?: Maybe<CategoryWhereInput>;
  categories_some?: Maybe<CategoryWhereInput>;
  categories_none?: Maybe<CategoryWhereInput>;
  reviews_every?: Maybe<ReviewWhereInput>;
  reviews_some?: Maybe<ReviewWhereInput>;
  reviews_none?: Maybe<ReviewWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  orderItems_every?: Maybe<OrderItemWhereInput>;
  orderItems_some?: Maybe<OrderItemWhereInput>;
  orderItems_none?: Maybe<OrderItemWhereInput>;
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple collections */
  collections: Array<Collection>;
  /** Retrieve a single collection */
  collection?: Maybe<Collection>;
  /** Retrieve multiple collections using the Relay connection interface */
  collectionsConnection: CollectionConnection;
  /** Retrieve document version */
  collectionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple currencies */
  currencies: Array<Currency>;
  /** Retrieve a single currency */
  currency?: Maybe<Currency>;
  /** Retrieve multiple currencies using the Relay connection interface */
  currenciesConnection: CurrencyConnection;
  /** Retrieve document version */
  currencyVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve multiple categories */
  categories: Array<Category>;
  /** Retrieve a single category */
  category?: Maybe<Category>;
  /** Retrieve multiple categories using the Relay connection interface */
  categoriesConnection: CategoryConnection;
  /** Retrieve document version */
  categoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple products */
  products: Array<Product>;
  /** Retrieve a single product */
  product?: Maybe<Product>;
  /** Retrieve multiple products using the Relay connection interface */
  productsConnection: ProductConnection;
  /** Retrieve document version */
  productVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple productColorVariants */
  productColorVariants: Array<ProductColorVariant>;
  /** Retrieve a single productColorVariant */
  productColorVariant?: Maybe<ProductColorVariant>;
  /** Retrieve multiple productColorVariants using the Relay connection interface */
  productColorVariantsConnection: ProductColorVariantConnection;
  /** Retrieve document version */
  productColorVariantVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple productSizeVariants */
  productSizeVariants: Array<ProductSizeVariant>;
  /** Retrieve a single productSizeVariant */
  productSizeVariant?: Maybe<ProductSizeVariant>;
  /** Retrieve multiple productSizeVariants using the Relay connection interface */
  productSizeVariantsConnection: ProductSizeVariantConnection;
  /** Retrieve document version */
  productSizeVariantVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple productSizeColorVariants */
  productSizeColorVariants: Array<ProductSizeColorVariant>;
  /** Retrieve a single productSizeColorVariant */
  productSizeColorVariant?: Maybe<ProductSizeColorVariant>;
  /** Retrieve multiple productSizeColorVariants using the Relay connection interface */
  productSizeColorVariantsConnection: ProductSizeColorVariantConnection;
  /** Retrieve document version */
  productSizeColorVariantVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple reviews */
  reviews: Array<Review>;
  /** Retrieve a single review */
  review?: Maybe<Review>;
  /** Retrieve multiple reviews using the Relay connection interface */
  reviewsConnection: ReviewConnection;
  /** Retrieve document version */
  reviewVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple orders */
  orders: Array<Order>;
  /** Retrieve a single order */
  order?: Maybe<Order>;
  /** Retrieve multiple orders using the Relay connection interface */
  ordersConnection: OrderConnection;
  /** Retrieve document version */
  orderVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple orderItems */
  orderItems: Array<OrderItem>;
  /** Retrieve a single orderItem */
  orderItem?: Maybe<OrderItem>;
  /** Retrieve multiple orderItems using the Relay connection interface */
  orderItemsConnection: OrderItemConnection;
  /** Retrieve document version */
  orderItemVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCollectionsArgs = {
  where?: Maybe<CollectionWhereInput>;
  orderBy?: Maybe<CollectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCollectionArgs = {
  where: CollectionWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCollectionsConnectionArgs = {
  where?: Maybe<CollectionWhereInput>;
  orderBy?: Maybe<CollectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCollectionVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCurrenciesArgs = {
  where?: Maybe<CurrencyWhereInput>;
  orderBy?: Maybe<CurrencyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCurrencyArgs = {
  where: CurrencyWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCurrenciesConnectionArgs = {
  where?: Maybe<CurrencyWhereInput>;
  orderBy?: Maybe<CurrencyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCurrencyVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCategoriesArgs = {
  where?: Maybe<CategoryWhereInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCategoriesConnectionArgs = {
  where?: Maybe<CategoryWhereInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductsConnectionArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProductColorVariantsArgs = {
  where?: Maybe<ProductColorVariantWhereInput>;
  orderBy?: Maybe<ProductColorVariantOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductColorVariantArgs = {
  where: ProductColorVariantWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductColorVariantsConnectionArgs = {
  where?: Maybe<ProductColorVariantWhereInput>;
  orderBy?: Maybe<ProductColorVariantOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductColorVariantVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProductSizeVariantsArgs = {
  where?: Maybe<ProductSizeVariantWhereInput>;
  orderBy?: Maybe<ProductSizeVariantOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductSizeVariantArgs = {
  where: ProductSizeVariantWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductSizeVariantsConnectionArgs = {
  where?: Maybe<ProductSizeVariantWhereInput>;
  orderBy?: Maybe<ProductSizeVariantOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductSizeVariantVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProductSizeColorVariantsArgs = {
  where?: Maybe<ProductSizeColorVariantWhereInput>;
  orderBy?: Maybe<ProductSizeColorVariantOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductSizeColorVariantArgs = {
  where: ProductSizeColorVariantWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductSizeColorVariantsConnectionArgs = {
  where?: Maybe<ProductSizeColorVariantWhereInput>;
  orderBy?: Maybe<ProductSizeColorVariantOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductSizeColorVariantVersionArgs = {
  where: VersionWhereInput;
};


export type QueryReviewsArgs = {
  where?: Maybe<ReviewWhereInput>;
  orderBy?: Maybe<ReviewOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryReviewsConnectionArgs = {
  where?: Maybe<ReviewWhereInput>;
  orderBy?: Maybe<ReviewOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryReviewVersionArgs = {
  where: VersionWhereInput;
};


export type QueryOrdersArgs = {
  where?: Maybe<OrderWhereInput>;
  orderBy?: Maybe<OrderOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryOrdersConnectionArgs = {
  where?: Maybe<OrderWhereInput>;
  orderBy?: Maybe<OrderOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryOrderVersionArgs = {
  where: VersionWhereInput;
};


export type QueryOrderItemsArgs = {
  where?: Maybe<OrderItemWhereInput>;
  orderBy?: Maybe<OrderItemOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryOrderItemsConnectionArgs = {
  where?: Maybe<OrderItemWhereInput>;
  orderBy?: Maybe<OrderItemOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryOrderItemVersionArgs = {
  where: VersionWhereInput;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


export type Review = Node & {
  __typename?: 'Review';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Review>;
  name: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  rating?: Maybe<Scalars['Int']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  content: Scalars['String'];
  headline: Scalars['String'];
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  product?: Maybe<Product>;
  /** List of Review versions */
  history: Array<Version>;
};


export type ReviewDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ReviewPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ReviewCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ReviewUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ReviewProductArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ReviewHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ReviewConnectInput = {
  /** Document to connect */
  where: ReviewWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ReviewEdge>;
  aggregate: Aggregate;
};

export type ReviewCreateInput = {
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  rating?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  content: Scalars['String'];
  headline: Scalars['String'];
  product?: Maybe<ProductCreateOneInlineInput>;
};

export type ReviewCreateManyInlineInput = {
  /** Create and connect multiple existing Review documents */
  create?: Maybe<Array<ReviewCreateInput>>;
  /** Connect multiple existing Review documents */
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
};

export type ReviewCreateOneInlineInput = {
  /** Create and connect one Review document */
  create?: Maybe<ReviewCreateInput>;
  /** Connect one existing Review document */
  connect?: Maybe<ReviewWhereUniqueInput>;
};

/** An edge in a connection. */
export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  /** The item at the end of the edge. */
  node: Review;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ReviewManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReviewWhereInput>>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  rating_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  rating_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  rating_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  rating_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  rating_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  rating_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  rating_gte?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  content?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  content_not_ends_with?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  headline_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  headline_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  headline_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  headline_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  headline_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  headline_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  headline_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: Maybe<Scalars['String']>;
  publishedBy?: Maybe<UserWhereInput>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  product?: Maybe<ProductWhereInput>;
};

export enum ReviewOrderByInput {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC'
}

export type ReviewUpdateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  product?: Maybe<ProductUpdateOneInlineInput>;
};

export type ReviewUpdateManyInlineInput = {
  /** Create and connect multiple Review documents */
  create?: Maybe<Array<ReviewCreateInput>>;
  /** Connect multiple existing Review documents */
  connect?: Maybe<Array<ReviewConnectInput>>;
  /** Override currently-connected documents with multiple existing Review documents */
  set?: Maybe<Array<ReviewWhereUniqueInput>>;
  /** Update multiple Review documents */
  update?: Maybe<Array<ReviewUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Review documents */
  upsert?: Maybe<Array<ReviewUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Review documents */
  disconnect?: Maybe<Array<ReviewWhereUniqueInput>>;
  /** Delete multiple Review documents */
  delete?: Maybe<Array<ReviewWhereUniqueInput>>;
};

export type ReviewUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
};

export type ReviewUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ReviewWhereInput;
  /** Update many input */
  data: ReviewUpdateManyInput;
};

export type ReviewUpdateOneInlineInput = {
  /** Create and connect one Review document */
  create?: Maybe<ReviewCreateInput>;
  /** Update single Review document */
  update?: Maybe<ReviewUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Review document */
  upsert?: Maybe<ReviewUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Review document */
  connect?: Maybe<ReviewWhereUniqueInput>;
  /** Disconnect currently connected Review document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Review document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ReviewUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ReviewWhereUniqueInput;
  /** Document to update */
  data: ReviewUpdateInput;
};

export type ReviewUpsertInput = {
  /** Create document if it didn't exist */
  create: ReviewCreateInput;
  /** Update document if it exists */
  update: ReviewUpdateInput;
};

export type ReviewUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ReviewWhereUniqueInput;
  /** Upsert data */
  data: ReviewUpsertInput;
};

/** Identifies documents */
export type ReviewWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReviewWhereInput>>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  rating_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  rating_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  rating_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  rating_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  rating_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  rating_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  rating_gte?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  content?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  content_not_ends_with?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  headline_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  headline_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  headline_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  headline_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  headline_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  headline_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  headline_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: Maybe<Scalars['String']>;
  publishedBy?: Maybe<UserWhereInput>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  product?: Maybe<ProductWhereInput>;
};

/** References Review record uniquely */
export type ReviewWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};


/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
};


/** User system model */
export type UserDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type UserConnectInput = {
  /** Document to connect */
  where: UserWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<UserEdge>;
  aggregate: Aggregate;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type ProductsNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsNamesQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'name'>
  )> }
);


export const ProductsNamesDocument = gql`
    query productsNames {
  products {
    name
  }
}
    `;

/**
 * __useProductsNamesQuery__
 *
 * To run a query within a React component, call `useProductsNamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsNamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsNamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsNamesQuery(baseOptions?: Apollo.QueryHookOptions<ProductsNamesQuery, ProductsNamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsNamesQuery, ProductsNamesQueryVariables>(ProductsNamesDocument, options);
      }
export function useProductsNamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsNamesQuery, ProductsNamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsNamesQuery, ProductsNamesQueryVariables>(ProductsNamesDocument, options);
        }
export type ProductsNamesQueryHookResult = ReturnType<typeof useProductsNamesQuery>;
export type ProductsNamesLazyQueryHookResult = ReturnType<typeof useProductsNamesLazyQuery>;
export type ProductsNamesQueryResult = Apollo.QueryResult<ProductsNamesQuery, ProductsNamesQueryVariables>;