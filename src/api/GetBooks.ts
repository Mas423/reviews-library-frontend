import axios from 'axios';
import * as H from 'history';
import Books from '../types/Books';

export type HistoryState = {
  startIndex?: number;
  maxResults?: number;
  // TODO:Google Books APIとAmazon APIとで分けるフラグ追加。
};

const getBooks = async (history: H.History<HistoryState>): Promise<Books> => {
  const baseURL = `https://www.googleapis.com/books/v1/volumes`;
  const query = `${history.location.search}`;
  let URL = baseURL + query;
  // TODO:冗長すぎる。要リファクタ。
  if (history.location.state.startIndex !== undefined)
    URL += `&startIndex=${history.location.state.startIndex}`;
  if (history.location.state.maxResults !== undefined)
    URL += `&maxResults=${history.location.state?.maxResults}`;
  const res = await axios.get<Books>(URL).catch(() => {
    throw new Error('Error');
  });

  return res.data;
};

export default getBooks;
