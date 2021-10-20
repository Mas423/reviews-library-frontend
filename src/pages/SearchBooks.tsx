/* eslint-disable jsx-a11y/img-redundant-alt */
import { ChangeEvent, FC, SyntheticEvent, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import NothingImage from 'assets/nothing_image.jpg';
import Books from '../types/Book';
import GetBooks, { HistoryState } from '../api/GetBooks';

const SearchBooks: FC = () => {
  const [books, setBooks] = useState<Books>();
  const [searchString, setSearchString] = useState<string>('');
  const history = useHistory<HistoryState>();
  const location = useLocation();

  useEffect(() => {
    const getBooks = async () => {
      const bookData = await GetBooks(history);
      setBooks(bookData);
    };
    void getBooks();
    // historyでは更新タイミングが遅れた。レンダリングの有無の違い。
  }, [location.search]);

  const searchHandleClick = () => {
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
  };

  const inputHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setSearchString(e.target.value);
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
    <>
      <h3>{searchString}</h3>
      <input
        type="text"
        value={searchString}
        onChange={inputHandleChange}
        onKeyPress={EnterHandleKeyPress}
      />
      <button type="button" onClick={() => searchHandleClick()}>
        検索
      </button>
      {/* TODO:最初のレンダリング時にkeyがユニークでないとエラーが出ている。 */}
      {books?.items ? (
        books.items.map((book) => (
          <>
            <h3 key={book.id}>{book.volumeInfo.title}</h3>
            {book.volumeInfo.imageLinks?.smallThumbnail ? (
              <img
                key={book.etag}
                src={book.volumeInfo.imageLinks?.smallThumbnail}
                alt="NothingImage"
              />
            ) : (
              <img src={NothingImage} alt="NothingImage" />
            )}
          </>
        ))
      ) : (
        // TODO:最初の検索時にも表示される
        <h3>Noting Books</h3>
      )}
    </>
  );
};

export default SearchBooks;
