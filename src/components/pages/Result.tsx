/* eslint-disable no-console */
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/test';

type BooksData = {
  totalItems: number;
  items: {
    id: string;
    volumeInfo: {
      title: string;
      publisher?: string;
      industryIdentifiers: {
        type: string;
        identifier: string;
      }[];
      imageLinks?: {
        smallThumbnail?: string;
        thumbnail?: string;
      };
      authors: string[];
    };
  }[];
};

type Params = {
  param: string;
};

const Result: FC = () => {
  const [books, setBooks] = useState<BooksData>();
  const [searchString, setSearchString] = useState<string>();
  //   const history = useHistory();
  const { param } = useParams<Params>();
  const [change, setChange] = useState<string>('');

  useEffect(() => {
    const getBooks = async () => {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${param}`;
      const res = await axios.get<BooksData>(url);
      setBooks(res.data);
      console.log(res.data);
    };
    void getBooks();
  }, [change]);

  const handlerClick = () => {
    console.log(books?.items.map((book) => book.volumeInfo.title));
  };

  const handleSubmit = () => {
    if (!searchString) return;
    setChange(searchString);
  };

  const inputHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  return (
    <>
      <h3>{param}</h3>
      <h3>{searchString}</h3>
      <form
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <input type="text" value={searchString} onChange={inputHandleChange} />
        <button type="submit">更新</button>
      </form>
      <button type="button" onClick={() => handlerClick()}>
        確認
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

// 今は使用していない
export default withRouter(Result);
