import { FC } from 'react';
import NothingImage from 'assets/nothing_image.jpg';
import { Box, Image } from '@chakra-ui/react';
import Books from '../types/Book';

type SearchResultType = {
  books: Books | undefined;
};

const SearchResult: FC<SearchResultType> = ({ books }) => (
  <>
    {books?.items?.map((book) => (
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        key={book.id}
      >
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          key={book.volumeInfo.title}
        >
          {book.volumeInfo.title}
        </Box>
        {book.volumeInfo.imageLinks?.smallThumbnail ? (
          <Image
            key={book.volumeInfo.imageLinks.smallThumbnail}
            src={book.volumeInfo.imageLinks.smallThumbnail}
            alt="NothingImage"
          />
        ) : (
          <Image key={book.etag} src={NothingImage} alt="NothingImage" />
        )}
      </Box>
    ))}
  </>
);

export default SearchResult;
