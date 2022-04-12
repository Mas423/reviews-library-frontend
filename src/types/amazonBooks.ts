// TODO: 名前がイケてない
export type SearchResult = {
  SearchResult: SearchResultType;
};

export type SearchResultType = {
  Items: ItemType[];
  SearchURL: string;
  TotalResultCount: number;
};

export type ItemType = {
  ASIN: string;
  DetailPageURL: string;
  Images: ImagesType;
  ItemInfo: {
    ByLineInfo: ByLineInfoType;
    ContentInfo: ContentInfoType;
    ExternalIds: ExternalIdsType | undefined;
    Title: BasicValue;
  };
};

type PrimaryValueType = {
  Height: number;
  URL: string;
  Width: number;
};

export type ImagesType = {
  Primary: {
    Large: PrimaryValueType;
    Medium: PrimaryValueType;
    Small: PrimaryValueType;
  };
};

type ExternalIdsValue = {
  DisplayValues: string[];
  Label: string;
  Locale: string;
};

export type ExternalIdsType = {
  EANs: ExternalIdsValue;
  ISBNs: ExternalIdsValue;
  UPCs: ExternalIdsValue;
};

type Contributors = {
  Locale: string;
  Name: string;
  Role: string;
  RoleType: string;
};

type BasicValue = {
  DisplayValue: number;
  Label: string;
  Locale: string;
};

export type ByLineInfoType = {
  Contributors: Contributors[];
  Manufacturer: BasicValue;
};

export type ContentInfoType = {
  Languages: {
    DisplayValues: [
      {
        DisplayValue: string;
        Type: string;
      },
    ];
    Label: string;
    Locale: string;
  };
  PagesCount: BasicValue;
  PublicationDate: BasicValue;
};

export type TitleType = {
  DisplayValue: string;
  Label: string;
  Locale: string;
};
