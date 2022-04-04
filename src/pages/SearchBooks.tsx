import { FC } from 'react';
import BooksSearchForm from '../components/organisms/BooksSearchForm';

const SearchBooks: FC = () => {
  console.log('hoge');

  return (
    <>
      {/* <Header />
    <NavigationBar /> */}
      <BooksSearchForm />
    </>
  );
};

export default SearchBooks;
