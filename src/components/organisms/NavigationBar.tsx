import { FC } from 'react';
import { Box, Wrap, Flex, Stack } from '@chakra-ui/react';
import { AiFillBook, AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import IconButton from '../molecules/NavigationButton';

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
                  title={menu.title}
                  to={menu.to}
                />
              ))}
            </Stack>
          </Box>
        </Wrap>
      </Stack>
    </Flex>
  );
};

export default NavigationBar;
