import { FC } from 'react';
import {
  Box,
  Wrap,
  // VStack
  // Text,
  Flex,
  Stack,
} from '@chakra-ui/react';
import { AiFillBook, AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import IconButton from '../molecules/IconButton';

const NavigationMenus = [
  {
    title: 'Home',
    icon: AiFillHome,
  },
  {
    title: 'Search',
    icon: AiOutlineSearch,
  },
  {
    title: 'BookShelf',
    icon: AiFillBook,
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
