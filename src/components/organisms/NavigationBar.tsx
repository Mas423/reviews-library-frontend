import { FC } from 'react';
import { Box, Wrap, Flex, Stack, Button } from '@chakra-ui/react';
import { AiFillBook, AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import IconButton from '../molecules/NavigationButton';
// Test

const NavigationMenus = [
  {
    title: 'Home',
    icon: AiFillHome,
    to: '/',
  },
  {
    title: 'Search',
    icon: AiOutlineSearch,
    to: '/search',
  },
  {
    title: 'BookShelf',
    icon: AiFillBook,
    to: '/',
  },
];

const NavigationBar: FC = () => {
  const st = 'sticky';
  const getBook = async () => {
    try {
      await axios.get('http://127.0.0.1/api/');
      // eslint-disable-next-line no-console
      console.log('Success');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Failed');
    }
  };

  return (
    <Flex>
      <Stack>
        <Wrap spacing="-0.5">
          <Box top={0} position={st} zIndex="sticky">
            <Stack>
              {NavigationMenus.map((menu) => (
                <IconButton
                  key={menu.title}
                  icon={menu.icon}
                  name={menu.title}
                  to={menu.to}
                />
              ))}
            </Stack>
            <Button onClick={() => getBook()}>Getリクエスト</Button>
          </Box>
        </Wrap>
      </Stack>
    </Flex>
  );
};

export default NavigationBar;
