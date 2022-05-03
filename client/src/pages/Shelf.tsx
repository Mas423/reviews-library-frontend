/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { Box, Center, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import Header from '../components/organisms/Header';

export const BookImage: FC = () => (
  <Box
    w="70px"
    h="90px"
    bg="gray.100"
    borderWidth="1px"
    _hover={{ opacity: 0.5 }}
  />
);

export const FolderBox: FC<FolderBoxType> = ({ title }) => {
  const hoge = 'hoge';
  console.log(hoge);

  const testImage = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
  ];

  return (
    <Box w="240px">
      <Center h="100%" w="100%" bg="white" borderRadius="lg" borderWidth="1px">
        <SimpleGrid spacing="2px" columns={[3]}>
          {testImage.slice(0, 9).map((x) => (
            <BookImage />
          ))}
        </SimpleGrid>
      </Center>
      <Center>
        <Text maxW="200px" isTruncated>
          {title}
        </Text>
      </Center>
    </Box>
  );
};

const Shelf: FC = () => {
  console.log('hoge');
  const folderBox: FolderBoxType[] = [
    {
      title: 'IT',
    },
    {
      title: 'hogehoge',
    },
    {
      title: 'Manga',
    },
    {
      title: '少年漫画',
    },
    {
      title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    },
    {
      title:
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    },
  ];

  return (
    <>
      <Header />
      <Box id="shelf-root" mx={[0, null, '20px', null, '100px']}>
        <SimpleGrid
          columns={[1, 2, 3, null, 4]}
          justifyItems="center"
          spacingY="50px"
          my="10px"
        >
          {folderBox.map((x) => (
            <FolderBox title={x.title} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

type FolderBoxType = {
  title: string;
};

export default Shelf;
