import { FC, useEffect, useState } from 'react';
import {
  RouteComponentProps,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import { Box, Skeleton, Stack } from '@chakra-ui/react';
import Result from './SearchBooksResult';
import { HistoryState, getBooks } from '../api/GetBooks';
import BooksSearchForm from '../components/organisms/BooksSearchForm';
import Header from '../components/organisms/Header';
import NavigationBar from '../components/organisms/NavigationBar';
import { Response } from '../types/RakutenBooks';

interface Props extends RouteComponentProps {
  books: Response | undefined;
}

const Component: FC<Props> = ({ books, match, location, history }) => (
  <>
    <Header />
    <NavigationBar />
    <Box
      marginLeft={{ base: '2%', sm: '4%', md: '20%' }}
      marginRight={{ base: '2%', sm: '4%', md: '20%' }}
    >
      <h3>{`match.patn: ${match.path}`}</h3>
      <h3>{`match.url: ${match.url}`}</h3>
      <h3>{`location.pathname: ${location.pathname}`}</h3>
      <h3>{`location.search: ${location.search}`}</h3>
      <h3>{`history.location.pathname: ${history.location.pathname}`}</h3>
      <h3>{`history.location.pathname: ${history.location.search}`}</h3>
      <BooksSearchForm />
      <Stack>
        {books?.Items ? (
          books.Items.map((book) => <Result key={book.isbn} book={book} />)
        ) : (
          <Stack>
            <Skeleton style={{ width: '100%' }} />
            <Skeleton style={{ width: '100%' }} />
            <Skeleton style={{ width: '100%' }} />
            <Skeleton style={{ width: '100%' }} />
            <Skeleton style={{ width: '100%' }} />
            <Skeleton style={{ width: '100%' }} />
          </Stack>
        )}
      </Stack>
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
