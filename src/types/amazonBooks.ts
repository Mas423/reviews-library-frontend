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
    Title: TitleType;
  };
};

export type ImagesType = {
  Primary: {
    Large: {
      Height: number;
      URL: string;
      Width: number;
    };
    Medium: {
      Height: number;
      URL: string;
      Width: number;
    };
    Small: {
      Height: number;
      URL: string;
      Width: number;
    };
  };
};

export type ByLineInfoType = {
  Contributors: [
    {
      Locale: string;
      Name: string;
      Role: string;
      RoleType: string;
    },
    {
      Locale: string;
      Name: string;
      Role: string;
      RoleType: string;
    },
  ];
  Manufacturer: {
    DisplayValue: string;
    Label: string;
    Locale: string;
  };
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
  PagesCount: {
    DisplayValue: number;
    Label: string;
    Locale: string;
  };
  PublicationDate: {
    DisplayValue: string;
    Label: string;
    Locale: string;
  };
};

export type TitleType = {
  DisplayValue: string;
  Label: string;
  Locale: string;
};
