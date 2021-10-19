/* eslint-disable no-console */
import { ChangeEvent, FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

const BooksSearchWindow: FC = () => {
  const [searchString, setSearchString] = useState<string>('');
  const history = useHistory();

  const inputHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO:バリデーション
    try {
      setSearchString(e.target.value);
    } catch (error) {
      throw new Error('Error');
    }
  };

  const searchHandleClick = () => {
    try {
      if (searchString)
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
    } catch (error) {
      throw new Error('Error');
    }
  };

  return (
    <>
      <h1>[SearchBooks]</h1>
      {searchString ? <h3>{searchString}</h3> : <h3>検索文字</h3>}
      <input type="text" value={searchString} onChange={inputHandleChange} />
      <button type="button" onClick={() => searchHandleClick()}>
        検索
      </button>
    </>
  );
};

export default BooksSearchWindow;
