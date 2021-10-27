import { Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';

const Header: FC = () => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    padding={6}
    bg="blue.500"
    color="white"
  >
    <Flex align="center" mr={6}>
      <Heading as="h1" size="lg" letterSpacing="tighter">
        Book management
      </Heading>
    </Flex>
  </Flex>
);

export default Header;
