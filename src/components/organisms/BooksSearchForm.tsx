/* eslint-disable no-console */
import { Input, HStack, IconButton } from '@chakra-ui/react';
import { ChangeEvent, FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

type BooksSearchFormType = {
  initialString: string;
};

const BooksSearchForm: FC<BooksSearchFormType> = ({ initialString = '' }) => {
  const [searchString, setSearchString] = useState('');
  const history = useHistory();

  const inputHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO:バリデーション
    try {
      setSearchString(e.target.value);
    } catch (error) {
      throw new Error('Error');
    }
  };

  const searchHandleClick = () => {
    try {
      if (!searchString) return;
      history.push(
        {
          pathname: `/search`,
          search: `?q=${searchString}`,
        },
        {
          startIndex: 0,
          maxResults: 10,
        },
      );
    } catch (error) {
      throw new Error('Error');
    }
  };

  const enterHandleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // TODO:inputのvalueを入れたい
    }
  };

  return (
    <HStack>
      <Input
        value={initialString || searchString}
        placeholder="検索文字"
        maxW="60"
        onChange={inputHandleChange}
        onKeyPress={enterHandleKeyPress}
        bg="white"
      />
      <IconButton
        aria-label="Search books"
        icon={<AiOutlineSearch />}
        onClick={() => searchHandleClick()}
      />
    </HStack>
  );
};

export default BooksSearchForm;
