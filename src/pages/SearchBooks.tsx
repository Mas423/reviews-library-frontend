/* eslint-disable jsx-a11y/img-redundant-alt */
import { ChangeEvent, FC, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import SearchResult from './SearchResult';
import {
  useSelector,
  getBooksData,
  updateSearchString,
} from '../Slices/SearchSlice';
import { HistoryState } from '../api/GetBooks';

const SearchBooks: FC = () => {
  // const [books, setBooks] = useState<Books>();
  const history = useHistory<HistoryState>();
  const location = useLocation();
  const { search } = useSelector((state) => ({
    search: state.search,
  }));

  const dispatch = useDispatch();

  // メモリリークの警告は無視で良い(実際には発生しないため)
  // https://github.com/reactwg/react-18/discussions/82
  useEffect(() => {
    dispatch(getBooksData(history));

    // historyでは更新タイミングが遅れた。レンダリングの有無の違い。
  }, [location.search]);

  const searchHandleClick = () => {
    try {
      if (!search.searchString) return;
      history.push(
        {
          pathname: `/search`,
          search: `?q=${search.searchString}`,
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
      dispatch(updateSearchString(e.target.value));
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
      <h3>{search.searchString}</h3>
      <input
        type="text"
        value={search.searchString}
        onChange={inputHandleChange}
        onKeyPress={EnterHandleKeyPress}
      />
      <Button type="button" onClick={() => searchHandleClick()}>
        検索
      </Button>
      {search.booksData ? (
        <SearchResult books={search.booksData} />
      ) : (
        <h3>Now loading</h3>
      )}
    </Box>
  );
};

export default SearchBooks;
