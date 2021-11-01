import { FC, useEffect, useState } from 'react';
import {
  RouteComponentProps,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import { Box, Spinner } from '@chakra-ui/react';
import SearchResult from './SearchResult';
import getBooks, { HistoryState } from '../api/GetBooks';
import BooksSearchForm from '../components/organisms/BooksSearchForm';
import Header from '../components/organisms/Header';
import NavigationBar from '../components/organisms/NavigationBar';
import { Response } from '../types/RakutenBooks';

interface Props extends RouteComponentProps {
  books: Response | undefined;
}

const Component: FC<Props> = ({ books, match, location, history }) => (
  <>
    <Box>
      <Header />
      <Box marginLeft="32" marginRight="32">
        <NavigationBar />
        <h3>{match.path}</h3>
        <h3>{match.url}</h3>
        <h3>{location.pathname}</h3>
        <h3>{location.search}</h3>
        <h3>{history.location.pathname}</h3>
        <h3>{history.location.search}</h3>
        <BooksSearchForm />
        <Box alignItems="center" marginLeft="48" marginRight="48">
          {books?.Items ? <SearchResult books={books} /> : <Spinner />}
        </Box>
      </Box>
    </Box>
  </>
);

const Container: FC = () => {
  const history = useHistory<HistoryState>();
  const [books, setBooks] = useState<Response>();
  const location = useLocation();
  const match = useRouteMatch();

  // メモリリークの警告は無視で良い(実際には発生しないため)
  // https://github.com/reactwg/react-18/discussions/82
  useEffect(() => {
    // MEMO:2回目以降の検索時もスピナーを表示するためだけ
    setBooks(undefined);
    const res = async () => {
      setBooks(await getBooks(history));
    };
    void res();
  }, [location.search]);

  return (
    <Component
      location={location}
      history={history}
      books={books}
      match={match}
    />
  );
};

export default Container;
