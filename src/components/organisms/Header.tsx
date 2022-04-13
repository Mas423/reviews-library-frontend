import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import CustomIcon from '../atoms/CustomIcon';

const Header: FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box>
        <Flex
          bg="white"
          color="gray.600"
          minH="60px"
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle="solid"
          borderColor="gray.200"
          align="center"
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CustomIcon w={3} h={3} icon={AiOutlineClose} />
                ) : (
                  <CustomIcon w={5} h={5} icon={AiOutlineMenu} />
                )
              }
              variant="ghost"
              aria-label="Toggle Navigation"
            />
          </Flex>
          <Flex align="center" mr={6}>
            <Link to="/">
              <Flex>
                <Heading as="h1" size="lg" letterSpacing="tighter">
                  reviews-library
                </Heading>
              </Flex>
            </Link>
          </Flex>
        </Flex>
        <Box flexGrow={3}>hogehoge</Box>
      </Box>
    </>
  );
};

export default Header;
