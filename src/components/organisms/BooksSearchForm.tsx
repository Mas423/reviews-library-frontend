import {
  Input,
  HStack,
  IconButton,
  Box,
  Heading,
  FormControl,
  Button,
  FormLabel,
  Image,
} from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchResult } from '../../types/amazonBooks';

export type searchInputsType = {
  searchString: string;
  exampleRequired: string;
};

const BooksSearchForm: FC = () => {
  const { register, handleSubmit, watch } = useForm<searchInputsType>();

  const [bookData, setBookData] = useState<SearchResult | undefined>(undefined);

  const getBooks = async (data: searchInputsType): Promise<void> => {
    if (!data) {
      console.error('dataがないよ');
    }
    console.log('getします');
    //   const res: AxiosResponse<SearchResult> = await axios.get('/api/search', {
    //     params: {
    //       keywords: data.searchString,
    //     },
    //   });
    //   setBookData(res.data);
    //   console.log(bookData);
    // };

    const res: AxiosResponse<SearchResult> = await axios({
      method: 'get',
      url: '/api/search',
      params: {
        keywords: data.searchString,
      },
    });
    setBookData(res.data);
  };
  console.log(watch('searchString'));

  return (
    <HStack>
      <Box>
        <Heading as="h2">本の検索</Heading>
        <form onSubmit={handleSubmit(getBooks)}>
          <FormControl>
            <FormLabel>本の検索フォーム</FormLabel>
            <Input
              defaultValue="harry"
              placeholder="検索"
              {...register('searchString')}
            />
          </FormControl>
          <Button type="submit">検索</Button>
        </form>
      </Box>
      <IconButton aria-label="Search books" icon={<AiOutlineSearch />} />
      <Box>
        {bookData ? (
          bookData.SearchResult.Items.map((item) => (
            <Box>
              <Heading as="h3">{item.ItemInfo.Title.DisplayValue}</Heading>
              <Image src={item.Images.Primary.Medium.URL} />
            </Box>
          ))
        ) : (
          <Heading as="h3">検索結果はまだない</Heading>
        )}
      </Box>
    </HStack>
  );
};

export default BooksSearchForm;
