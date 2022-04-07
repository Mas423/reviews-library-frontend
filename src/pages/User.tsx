import { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { getAuth } from 'firebase/auth';
import Header from '../components/organisms/Header';

const User: FC = () => {
  const currentUser = () => {
    const auth = getAuth();
    console.log(auth.currentUser);
  };

  return (
    <>
      <Header />
      <Button onClick={() => currentUser()}>現在のユーザ表示</Button>
    </>
  );
};

export default User;
