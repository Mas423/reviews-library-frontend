import { FC, useState } from 'react';
import { Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/organisms/Header';
import SignUp from '../components/organisms/SignUp';

// type Books =
//   | {
//       id: number;
//       isbn: string;
//       createdAt: Date;
//     }[]
//   | undefined;

// type Props = {
//   books: Books;
//   handleClickGet: () => void;
// };

// const Component: FC<Props> = ({ books, handleClickGet }) => {
//   const home = 'Home';

//   return (
//     <>
//       <Header />
//       <h1>[{home}]</h1>
//       <FormControl>
//         <FormLabel>Form for test</FormLabel>
//         <Input placeholder="This is Test" />
//       </FormControl>
//       <Button onClick={() => handleClickGet()}>Test Button</Button>
//       {books ? (
//         books.map((book) => <ul key={book.id}>{book?.isbn}</ul>)
//       ) : (
//         <h5>Nothing Books</h5>
//       )}
//       <Link to="/">ログイン</Link>
//       <SignUp />
//     </>
//   );
// };

// const Container: FC = () => {
//   const [books, setBooks] = useState<Books>();
//   // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//   //   event.preventDefault();
//   //   axios.get(`http://api/books`);
//   // };
//   const handleClickGet = async () => {
//     const resBooks: Books = (await axios.get(`http://localhost/api/books`))
//       .data;
//     // eslint-disable-next-line no-console
//     console.log(resBooks);
//     if (resBooks) setBooks(resBooks);
//   };

//   return <Component books={books} handleClickGet={handleClickGet} />;
// };

// export default Container;

type Books =
  | {
      id: number;
      isbn: string;
      createdAt: Date;
    }[]
  | undefined;

const Home: FC = () => {
  const [books, setBooks] = useState<Books>();
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   axios.get(`http://api/books`);
  // };
  const handleClickGet = async () => {
    const resBooks: Books = (await axios.get(`http://localhost/api/books`))
      .data;
    // eslint-disable-next-line no-console
    console.log(resBooks);
    if (resBooks) setBooks(resBooks);
  };
  const home = 'Home';

  return (
    <>
      <Header />
      <h1>[{home}]</h1>
      <FormControl>
        <FormLabel>Form for test</FormLabel>
        <Input placeholder="This is Test" />
      </FormControl>
      <Button onClick={() => handleClickGet()}>Test Button</Button>
      {books ? (
        books.map((book) => <ul key={book.id}>{book?.isbn}</ul>)
      ) : (
        <h5>Nothing Books</h5>
      )}
      <Link to="/">ログイン</Link>
      <SignUp />
    </>
  );
};

export default Home;
