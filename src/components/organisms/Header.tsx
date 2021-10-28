import { Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import BooksSearchForm from './BooksSearchForm';

const Header: FC = () => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    padding={6}
    bg="blue.500"
  >
    <Flex align="center" mr={6}>
      <Heading as="h1" size="lg" letterSpacing="tighter">
        Book management
      </Heading>
    </Flex>
    <BooksSearchForm initialString="" />
  </Flex>
);

export default Header;
