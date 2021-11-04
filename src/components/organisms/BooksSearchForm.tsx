import { Input, HStack, IconButton } from '@chakra-ui/react';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

interface Props {
  searchString: string;
  handleUpdateForm: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEnterSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  handleSelectAll: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Component: FC<Props> = ({
  searchString,
  handleUpdateForm,
  handleEnterSearch,
  handleSearch: searchHandleClick,
  handleSelectAll,
}) => (
  <HStack>
    <Input
      value={searchString}
      placeholder="Search string"
      maxW="60"
      onChange={handleUpdateForm}
      onKeyPress={handleEnterSearch}
      onFocus={handleSelectAll}
      bg="white"
    />
    <IconButton
      aria-label="Search books"
      icon={<AiOutlineSearch />}
      onClick={() => searchHandleClick()}
    />
  </HStack>
);

const Container: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const initSearchString = () => {
    // TODO:isbnのときだけ弾いているが冗長
    const initial = decodeURI(history.location.search.replace(/\?q=/, ''));
    if (initial.includes('?')) return '';

    return initial;
  };
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    setSearchString(initSearchString);
  }, [location.search]);

  const handleUpdateForm = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO:バリデーション
    try {
      setSearchString(e.target.value);
    } catch (error) {
      throw new Error('Error');
    }
  };

  const handleSearch = () => {
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

  const handleEnterSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSelectAll = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return (
    <Component
      searchString={searchString}
      handleUpdateForm={handleUpdateForm}
      handleEnterSearch={handleEnterSearch}
      handleSearch={handleSearch}
      handleSelectAll={handleSelectAll}
    />
  );
};
export default Container;
