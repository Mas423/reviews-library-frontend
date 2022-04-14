import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Button, Stack } from '@chakra-ui/react';
import { getAuth } from 'firebase/auth';
import Header from '../components/organisms/Header';

const Home: FC = () => {
  const currentUser = () => {
    const isLogin = getAuth().currentUser;
    console.log(isLogin);
  };

  return (
    <>
      <Header />
      <Stack>
        <Link as={RouterLink} to="/signup">
          サインアップ
        </Link>
        <Link as={RouterLink} to="/login">
          ログイン
        </Link>
        <Link as={RouterLink} to="/user">
          ユーザページ(仮)
        </Link>
        <Link as={RouterLink} to="/search">
          本の検索
        </Link>
        <Link as={RouterLink} to="/header">
          ヘッダ
        </Link>
      </Stack>
      <Button onClick={() => currentUser()}>現在のユーザ表示</Button>
    </>
  );
};

export default Home;
