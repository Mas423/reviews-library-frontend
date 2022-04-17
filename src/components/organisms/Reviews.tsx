import { Box, Button } from '@chakra-ui/react';
import axios from 'axios';
import { FC } from 'react';
import { getAuth } from 'firebase/auth';

const Reviews: FC = () => {
  const hoge = 'hoge';
  console.log(hoge);

  const onReviews = async (): Promise<void> => {
    const isCurrentUser = getAuth().currentUser;
    if (!isCurrentUser) {
      console.log('no login');

      return;
    }
    const idToken = await isCurrentUser.getIdToken();
    if (!idToken) {
      console.log('no idToken');

      return;
    }
    const title = 'title';
    const content = 'content';
    const rate = 3.5;

    const asin = 'B07WZC7PC1';
    const res = await axios({
      method: 'post',
      url: `/api/reviews${asin}`,
      data: {
        title,
        content,
        rate,
      },
      headers: {
        Authorization: idToken,
      },
    });
    console.log(res);
  };

  return (
    <Box>
      <Button onClick={onReviews}>レビューするよ1</Button>
    </Box>
  );
};

export default Reviews;
