import {
  useSelector as rowUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import {
  createSlice,
  configureStore,
  createAsyncThunk,
  SerializedError,
} from '@reduxjs/toolkit';
import * as H from 'history';
import axios from 'axios';
import Books from '../types/Book';

export type State = {
  booksData?: Books;
  error?: SerializedError;
};

const initialState: State = {
  booksData: undefined,
  error: undefined,
};

export type AddQuery = {
  startIndex?: number;
  maxResults?: number;
  // TODO:Google Books APIとAmazon APIとで分けるフラグ追加。
};

export const getBooksData = createAsyncThunk(
  'booksData/getBooksData',
  async (history: H.History<AddQuery>) => {
    const baseURL = `https://www.googleapis.com/books/v1/volumes`;
    const query = `${history.location.search}`;
    let URL = baseURL + query;
    // TODO:冗長すぎる。要リファクタ。
    if (history.location.state.startIndex !== undefined)
      URL += `&startIndex=${history.location.state.startIndex}`;
    if (history.location.state.maxResults !== undefined)
      URL += `&maxResults=${history.location.state?.maxResults}`;
    const res = await axios.get<Books>(URL).catch(() => {
      throw new Error('Books data get error');
    });

    return res.data;
  },
);

const searchBooksSlice = createSlice({
  name: 'searchBooks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooksData.fulfilled, (state, action) => {
      state.booksData = action.payload;
    });
    builder.addCase(getBooksData.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export const store = configureStore({
  reducer: {
    search: searchBooksSlice.reducer,
    // books: booksSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

// 型情報付きのカスタムuseSelectorを宣言
export const useSelector: TypedUseSelectorHook<RootState> = rowUseSelector;
