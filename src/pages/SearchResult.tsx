import { FC } from 'react';
import NothingImage from 'assets/nothing_image.jpg';
import { Box, Image, Link, Flex } from '@chakra-ui/react';
import { Response } from '../types/RakutenBooks';

type SearchResultType = {
  books: Response | undefined;
};

const SearchResult: FC<SearchResultType> = ({ books }) => (
  <Flex wrap="wrap" direction="column" justify="center">
    {books?.Items?.map((book) => (
      <Box borderWidth="1px" borderRadius="lg" key={book.isbn}>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          key={book.title}
        >
          {book.title}
        </Box>
        {book.largeImageUrl ? (
          <Link isExternal href={book.affiliateUrl}>
            <Image
              key={book.largeImageUrl}
              src={book.largeImageUrl}
              alt="NothingImage"
            />
          </Link>
        ) : (
          <Image
            key={book.booksGenreId}
            src={NothingImage}
            alt="NothingImage"
          />
        )}
      </Box>
    ))}
  </Flex>
);

export default SearchResult;
