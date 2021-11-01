import axios from 'axios';
import * as H from 'history';
import { Response } from '../types/RakutenBooks';

export type HistoryState = {
  startIndex?: number;
  maxResults?: number;
  // TODO:Google Books APIとAmazon APIとで分けるフラグ追加。
};

// const getBooks = async (history: H.History<HistoryState>): Promise<Books> => {
//   const baseURL = `https://www.googleapis.com/books/v1/volumes`;
//   const query = `${history.location.search}`;
//   let URL = baseURL + query;
//   // TODO:冗長すぎる。要リファクタ。
//   if (history.location.state.startIndex !== undefined)
//     URL += `&startIndex=${history.location.state.startIndex}`;
//   if (history.location.state.maxResults !== undefined)
//     URL += `&maxResults=${history.location.state?.maxResults}`;
//   const res = await axios.get<Books>(URL).catch(() => {
//     throw new Error('Error');
//   });

//   return res.data;
// };

const getEnv = () => {
  const envData = {
    devId: process.env.RAKUTEN_DEV_ID,
    secret: process.env.RAKUTEN_SECRET,
    affiliateId: process.env.RAKUTEN_ID,
  };
  if (envData.devId && envData.secret && envData.affiliateId) {
    return envData;
  }

  return null;
};

const getBooks = async (
  history: H.History<HistoryState>,
): Promise<Response> => {
  const title = `${history.location.search.replace(/\?q=/, '')}`;
  const envData = getEnv();
  if (envData == null) {
    throw new Error('envData is null');
  }
  const params = {
    format: 'json',
    formatVersion: 2,
    title,
    booksGenreId: '001',
    applicationId: envData.devId,
    affiliateId: envData.affiliateId,
    hits: 10,
    page: 1,
    outOfStockFlag: 1,
    sort: 'sales',
  };
  const baseURL = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404`;
  const res = await axios.get<Response>(baseURL, { params }).catch(() => {
    throw new Error('axios error');
  });

  return res.data;
};

export default getBooks;
