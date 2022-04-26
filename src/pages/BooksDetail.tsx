/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  HStack,
  //   Stack,
  Link,
  Image,
  Spinner,
  Text,
  Box,
  Button,
  //   Flex,
} from '@chakra-ui/react';
import axios from 'axios';
import NavigationBar from '../components/organisms/NavigationBar';
import Header from '../components/organisms/Header';
import { ItemElement } from '../types/RakutenBooks';

interface Props {
  book: ItemElement | undefined;
  trimImageUrl: string | undefined;
  handleClickPostBook: () => void;
}

const Component: FC<Props> = ({ book, trimImageUrl, handleClickPostBook }) => (
  <>
    <Header />
    <NavigationBar />
    <Box
      borderRadius="lg"
      shadow="lg"
      borderWidth="1px"
      marginLeft={{ base: '2%', sm: '4%', md: '20%' }}
      marginRight={{ base: '2%', sm: '4%', md: '20%' }}
      w="60%"
      h="auto"
    >
      <HStack>
        <Box minW="20%" h="auto" margin="5%" shadow="base">
          {book?.largeImageUrl ? (
            <Link href={book.affiliateUrl} isExternal>
              <Image src={trimImageUrl} />
            </Link>
          ) : (
            <Spinner />
          )}
        </Box>
        <Box margin="5%" pos="relative" top="1">
          <Text
            as="h2"
            fontSize="3xl"
            fontWeight="semibold"
            pos="relative"
            top="1"
          >
            {book?.title}
          </Text>
          <Text as="h4" fontSize="xl">
            {book?.author}
          </Text>
          <Text fontSize="md">{book?.publisherName}</Text>
        </Box>
      </HStack>
    </Box>
    <Button onClick={handleClickPostBook}>登録</Button>
  </>
);

const Container: FC = () => {
  const location = useLocation();
  const [book, setBook] = useState<ItemElement>();
  const trimImageUrl = book?.largeImageUrl.replace(/ex=200x200/, 'ex=400x400');

  const handleClickPostBook = async () => {
    if (book) {
      // eslint-disable-next-line no-console
      if (!book.isbn) console.log('ISBNがありません。');
      const { isbn } = book;
      const res = await axios.post(`http://localhost/api/books`, { isbn });
      // eslint-disable-next-line no-console
      console.log(res);
    }
  };

  // useEffect(() => {
  //   const res = async () => {
  //     setBook(await getIsbnBooks(location.state));
  //   };
  //   void res();
  // }, [location.search]);

  return (
    <Component
      book={book}
      trimImageUrl={trimImageUrl}
      handleClickPostBook={handleClickPostBook}
    />
  );
};

export default Container;
