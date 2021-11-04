import { Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import BooksSearchForm from './BooksSearchForm';

const Header: FC = () => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    padding={6}
    bg="blue.400"
    shadow="md"
  >
    <Flex align="center" mr={6}>
      <Link to="/">
        <Heading as="h1" size="lg" letterSpacing="tighter">
          Book management
        </Heading>
      </Link>
    </Flex>
    <BooksSearchForm />
  </Flex>
);

export default Header;
