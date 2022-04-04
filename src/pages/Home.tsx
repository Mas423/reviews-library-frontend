import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import Header from '../components/organisms/Header';
import SignUp from '../components/organisms/SignUp';

const Home: FC = () => (
  <>
    <Header />
    <Link as={RouterLink} to="/login">
      ログイン
    </Link>
    <SignUp />
    <Link as={RouterLink} to="/search">
      本の検索
    </Link>
  </>
);

export default Home;
