type BooksData = {
  totalItems: number;
  items: {
    id: string;
    volumeInfo: {
      title: string;
      publisher?: string;
      industryIdentifiers: {
        type: string;
        identifier: string;
      }[];
      imageLinks?: {
        smallThumbnail?: string;
        thumbnail?: string;
      };
      authors: string[];
    };
  }[];
};

export default BooksData;
