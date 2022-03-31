import { Input, HStack, IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const BooksSearchForm: FC = () => (
  <HStack>
    <Input />
    <IconButton aria-label="Search books" icon={<AiOutlineSearch />} />
  </HStack>
);

export default BooksSearchForm;
