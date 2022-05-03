type Books = {
  totalItems: number;
  items:
    | {
        etag: string;
        id: string;
        volumeInfo: {
          title: string;
          publisher?: string;
          industryIdentifiers: { type: string; identifier: string }[];
          imageLinks?: {
            smallThumbnail?: string;
            thumbnail?: string;
          };
          authors: string[];
        };
      }[];
};

// TODO:この形が可能なら情報量もアクセスも良い。
// type Books = {
//   id: string;
//   volumeInfo: {
//     title: string;
//     publisher?: string;
//     industryIdentifiers: { type: string; identifier: string }[];
//     imageLinks?: {
//       smallThumbnail?: string;
//       thumbnail?: string;
//     };
//     authors: string[];
//   };
// }[];

export default Books;
