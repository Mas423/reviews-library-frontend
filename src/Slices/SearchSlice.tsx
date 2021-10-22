import {
  useSelector as rowUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

export type State = {
  searchString: string;
};

const initialState: State = {
  searchString: '',
};

const searchSlice = createSlice({
  name: 'updateSearchString',
  initialState,
  reducers: {
    changeSearchString: (state, action: PayloadAction<string>) => ({
      ...state,
      searchString: action.payload,
    }),
  },
});

export const { changeSearchString } = searchSlice.actions;

export const store = configureStore({
  reducer: searchSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export const useSelector: TypedUseSelectorHook<RootState> = rowUseSelector;
