import { FC } from 'react';
import Header from '../components/organisms/Header';
import BooksSearchForm from '../components/organisms/BooksSearchForm';

const SearchBooks: FC = () => {
  console.log('hoge');

  return (
    <>
      <Header />
      <BooksSearchForm />
    </>
  );
};

export default SearchBooks;
