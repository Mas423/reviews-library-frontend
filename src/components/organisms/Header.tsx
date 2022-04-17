/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  HStack,
  Text,
  Flex,
  Heading,
  useBreakpointValue,
  Spacer,
  Button,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FC, useLayoutEffect, useState } from 'react';

const MobileHeader: FC = () => {
  const hoge = 'hoge';
  console.log(hoge);

  return (
    <Box p={6}>
      <Heading>モバイル版</Heading>
    </Box>
  );
};

const DesktopHeader: FC = () => {
  const hoge = 'hoge';
  console.log(hoge);
  const navList = [{ name: 'home' }, { name: 'hoge' }, { name: 'foo' }];

  return (
    <Box>
      <Flex
        p={6}
        direction="row"
        align="center"
        borderBottom="1px"
        borderBottomColor="gray.200"
      >
        <Flex>
          <Heading size="md" as={RouterLink} to="/">
            Desktop版
          </Heading>

          <HStack ml={8}>
            {navList.map((nav) => (
              <Text
                _hover={{ color: 'gray.800' }}
                textColor="gray.500"
                as={RouterLink}
                to="/header"
              >
                {nav.name}
              </Text>
            ))}
          </HStack>
        </Flex>

        <Spacer />
        <HStack>
          <Box>
            <Button>Sign in</Button>
          </Box>
          <Box>
            <Button>Sign up</Button>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

const Header: FC = () => {
  // コンポーネントの切り替えでレスポンシブに対応する
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [test, setTest] = useState(false);
  // 一瞬Mobile表示になってしまうチラツキ防止
  useLayoutEffect(() => {
    setTest(true);
  });

  return (
    <>
      {test ? (
        <Box>{isMobile ? <MobileHeader /> : <DesktopHeader />}</Box>
      ) : (
        <Text>読込中</Text>
      )}
    </>
  );
};

export default Header;
