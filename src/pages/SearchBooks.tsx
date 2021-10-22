/* eslint-disable jsx-a11y/img-redundant-alt */
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import SearchResult from './SearchResult';
import { useSelector, changeSearchString } from '../Slices/SearchSlice';
import Books from '../types/Book';
import GetBooks, { HistoryState } from '../api/GetBooks';

const SearchBooks: FC = () => {
  const [books, setBooks] = useState<Books>();
  // const [searchString, setSearchString] = useState<string>('');
  const history = useHistory<HistoryState>();
  const location = useLocation();
  const { searchString } = useSelector((state) => ({
    searchString: state.searchString,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const getBooks = async () => {
      const bookData = await GetBooks(history);
      setBooks(bookData);
    };

    void getBooks();
    // historyでは更新タイミングが遅れた。レンダリングの有無の違い。
  }, [location.search]);

  const searchHandleClick = () => {
    try {
      if (!searchString) return;
      history.push(
        {
          pathname: `/search`,
          search: `?q=${searchString}`,
        },
        {
          startIndex: 0,
          maxResults: 10,
        },
      );
    } catch {
      throw new Error('Error');
    }
  };

  const inputHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      dispatch(changeSearchString(e.target.value));
    } catch (error) {
      throw new Error('inputError');
    }
  };

  const EnterHandleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // TODO:inputのvalueを入れたい
    }
  };

  return (
    <Box>
      <Box top={0} position="sticky" zIndex="sticky">
        header
      </Box>
      <h3>{location.search}</h3>
      <h3>{searchString}</h3>
      <input
        type="text"
        value={searchString}
        onChange={inputHandleChange}
        onKeyPress={EnterHandleKeyPress}
      />
      <Button type="button" onClick={() => searchHandleClick()}>
        検索
      </Button>
      {books ? <SearchResult books={books} /> : <h3>Now loading</h3>}
    </Box>
  );
};

export default SearchBooks;
