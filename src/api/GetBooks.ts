// import axios from 'axios';
// import { ItemElement, Response } from '../types/RakutenBooks';

// export type HistoryState = {
//   startIndex?: number;
//   maxResults?: number;
// };

// const getEnv = () => {
//   const envData = {
//     devId: process.env.RAKUTEN_DEV_ID,
//     secret: process.env.RAKUTEN_SECRET,
//     affiliateId: process.env.RAKUTEN_ID,
//   };
//   if (envData.devId && envData.secret && envData.affiliateId) {
//     return envData;
//   }

//   return null;
// };

// export const getIsbnBooks = async (isbn: string): Promise<ItemElement> => {
//   const envData = getEnv();
//   if (envData == null) {
//     throw new Error('envData is null');
//   }
//   const params = {
//     format: 'json',
//     formatVersion: 2,
//     isbn,
//     booksGenreId: '001',
//     applicationId: envData.devId,
//     affiliateId: envData.affiliateId,
//     outOfStockFlag: 1,
//   };
//   const baseURL = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404`;
//   const res = await axios.get<Response>(baseURL, { params }).catch(() => {
//     throw new Error('axios error');
//   });

//   return res.data.Items[0];
// };
