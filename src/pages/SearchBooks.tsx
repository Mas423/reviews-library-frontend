/* eslint-disable jsx-a11y/img-redundant-alt */
import { FC, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Box, HStack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import SearchResult from './SearchResult';
import { useSelector, getBooksData } from '../Slices/SearchSlice';
import { HistoryState } from '../api/GetBooks';
import BooksSearchForm from '../components/organisms/BooksSearchForm';
import Header from '../components/organisms/Header';
import NavigationBar from '../components/organisms/NavigationBar';

const SearchBooks: FC = () => {
  const history = useHistory<HistoryState>();
  const location = useLocation();
  const { search } = useSelector((state) => ({
    search: state.search,
  }));
  const dispatch = useDispatch();

  // メモリリークの警告は無視で良い(実際には発生しないため)
  // https://github.com/reactwg/react-18/discussions/82
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(history.location.search);
    dispatch(getBooksData(history));
  }, [location.search]);

  return (
    <Box>
      <Header />
      <HStack>
        <Box marginLeft="32" marginRight="32">
          <Box>
            <NavigationBar />
          </Box>
          <h3>{location.search}</h3>
          <BooksSearchForm initialString={history.location.search} />
          {search.booksData ? (
            <SearchResult books={search.booksData} />
          ) : (
            <h3>Now loading</h3>
          )}
        </Box>
      </HStack>
    </Box>
  );
};

export default SearchBooks;
