/* eslint-disable no-console */
import { ChangeEvent, FC, useState } from 'react';
import axios from 'axios';
import { withRouter, useHistory } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:3000/test';

const SearchBooks: FC = () => {
  const [searchString, setSearchString] = useState<string>('');
  const history = useHistory();

  const inputHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const handleClick = () => {
    if (searchString) history.push(`/test/${searchString}`);
  };

  return (
    <>
      <h1>[Home]</h1>

      <h3>{searchString}</h3>
      <form onSubmit={() => handleClick()}>
        <input type="text" value={searchString} onChange={inputHandleChange} />
        <button type="submit">Books情報取得</button>
      </form>
    </>
  );
};

export default withRouter(SearchBooks);
