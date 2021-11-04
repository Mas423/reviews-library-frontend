import { Image, Text, HStack, Stack, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import NothingImage from 'assets/nothing_image.jpg';
import { ItemElement } from '../types/RakutenBooks';

interface Props {
  book: ItemElement;
}

const Component: FC<Props> = ({ book }) => (
  <HStack borderWidth="1px" borderRadius="lg" shadow="md">
    <Box margin="2%">
      {book.largeImageUrl ? (
        <Link
          to={{
            pathname: '/book',
            search: book.isbn,
            state: book.isbn,
          }}
        >
          <Image src={book.largeImageUrl} alt="NothingImage" />
        </Link>
      ) : (
        <Image src={NothingImage} alt="NothingImage" />
      )}
    </Box>
    <Stack maxW="60%" overflowWrap="normal" key={book.authorKana}>
      <Link
        to={{
          pathname: '/book',
          search: book.isbn,
          state: book.isbn,
        }}
      >
        <Text
          overflowWrap="normal"
          as="h2"
          mt="1"
          fontWeight="semibold"
          lineHeight="tight"
          fontSize="2xl"
          isTruncated
        >
          {book.title}
        </Text>
      </Link>
      <Text as="h5" mt="1">
        {book.author}
      </Text>
      <Text>{book.publisherName}</Text>
    </Stack>
  </HStack>
);

const Container: FC<Props> = ({ book }) => <Component book={book} />;

export default Container;
