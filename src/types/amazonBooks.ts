// TODO: 名前がイケてない
export type SearchResult = {
  searchResult: SearchResultType;
};

export type SearchResultType = {
  items: ItemType[];
  searchURL: string;
  totalResultCount: number;
};

export type ItemType = {
  asin: string;
  detailPageURL: string;
  images: ImagesType;
  itemInfo: {
    byLineInfo: ByLineInfoType;
    contentInfo: ContentInfoType;
    externalIds: ExternalIdsType;
    title: TitleType;
  };
};

type ImageValueType = {
  height: number;
  url: string;
  width: number;
};

export type ImagesType = {
  primary: {
    large: ImageValueType;
    medium: ImageValueType;
    small: ImageValueType;
  };
};

type LineValueType = {
  locale: string;
  name: string;
  role: string;
  roleType: string;
};

export type ByLineInfoType = {
  contributors: LineValueType[];
  manufacturer: {
    displayValue: string;
    label: string;
    locale: string;
  };
};

export type ContentInfoType = {
  languages: {
    displayValues: [
      {
        displayValue: string;
        type: string;
      },
    ];
    Label: string;
    Locale: string;
  };
  pagesCount: {
    displayValue: number;
    label: string;
    locale: string;
  };
  PublicationDate: {
    displayValue: string;
    label: string;
    locale: string;
  };
};

type ExternalIdsTypeValueType = {
  displayValue: string[];
  label: string;
  locale: string;
};

export type TitleType = {
  displayValue: string;
  label: string;
  locale: string;
};

export type ExternalIdsType = {
  itemInfo: {
    externalIds: {
      eans: ExternalIdsTypeValueType;
      isbns: ExternalIdsTypeValueType;
      upcs: ExternalIdsTypeValueType;
    };
  };
};
