/* eslint-disable no-console */
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { withRouter, useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import BooksData from '../types/Book';

axios.defaults.baseURL = 'http://localhost:3000/test';

const Result: FC = () => {
  const [books, setBooks] = useState<BooksData>();
  const [searchString, setSearchString] = useState<string>('');
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const getBooks = async () => {
      const url = `https://www.googleapis.com/books/v1/volumes${location.search}`;
      const res = await axios.get<BooksData>(url);
      setBooks(res.data);
    };
    void getBooks();
  }, [location.search]);

  const searchHandleClick = () => {
    if (!searchString) return;
    history.replace({
      search: `?q=${searchString}&startIndex=0&maxResults=40`,
    });
  };

  const inputHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const testHandler = () => {
    const start = 10;
    history.replace({
      search: `?q=${searchString}&startIndex=${start}&maxResults=20`,
    });
  };

  return (
    <>
      <button type="button" onClick={() => testHandler()}>
        テスト
      </button>
      <h3>pathname {location.pathname}</h3>
      <h3>search {location.search}</h3>
      <h3>{searchString}</h3>
      <input
        type="text"
        value={searchString}
        onChange={inputHandleChange}
        onKeyPress={handleKeyPress}
      />
      <button type="button" onClick={() => searchHandleClick()}>
        検索
      </button>
      {books?.items.map((book) => (
        <>
          <h3 key={book.id}>{book.volumeInfo.title}</h3>
          <img
            key={`${book.id}img`}
            src={book.volumeInfo.imageLinks?.smallThumbnail}
            alt="Error"
          />
        </>
      ))}
    </>
  );
};

export default withRouter(Result);
