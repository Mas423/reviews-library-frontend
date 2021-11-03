import { Image, Text, HStack, Stack, Link } from '@chakra-ui/react';
import { FC } from 'react';
import NothingImage from 'assets/nothing_image.jpg';
import { ItemElement } from '../types/RakutenBooks';

interface Props {
  book: ItemElement;
}

const Component: FC<Props> = ({ book }) => (
  <HStack bgColor="red.300" borderWidth="1px" borderRadius="lg">
    {book.largeImageUrl ? (
      <Link isExternal href={book.affiliateUrl}>
        <Image src={book.largeImageUrl} alt="NothingImage" />
      </Link>
    ) : (
      <Image src={NothingImage} alt="NothingImage" />
    )}
    <Stack maxW="60%" overflowWrap="normal" key={book.authorKana}>
      <Text
        bgColor="blue.300"
        overflowWrap="normal"
        as="h4"
        mt="1"
        fontWeight="semibold"
        lineHeight="tight"
        isTruncated
      >
        {book.title}
      </Text>
      <Text as="h5" mt="1">
        {book.author}
      </Text>
      <Text>{book.publisherName}</Text>
    </Stack>
  </HStack>
);

const Container: FC<Props> = ({ book }) => <Component book={book} />;

export default Container;
