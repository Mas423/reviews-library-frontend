import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Flex,
  Heading,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { signOut } from '../features/auth/signOut';
import { signUp } from '../features/auth/signUp';
import { signIn } from '../features/auth/signIn';
import { firebaseApp } from '../sdk/firebase';

const Auth: FC = () => {
  const { register, handleSubmit, watch } = useForm();
  const [count, setCount] = useState(0);

  console.log(watch('password'));

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      } else {
        console.log('userがいない');
      }
    });
  }, [count]);

  return (
    <>
      <Flex>
        <Button onClick={() => setCount(Math.random())} />
        <Heading>ユーザ管理</Heading>
        <Box>
          <form onSubmit={handleSubmit(signUp)}>
            <FormControl>
              <FormLabel>メールアドレス</FormLabel>
              <Input placeholder="メールアドレス" />
            </FormControl>
            <FormControl>
              <FormLabel>パスワード</FormLabel>
              <Input
                defaultValue="Password_123"
                placeholder="パスワード"
                {...register('password')}
              />
            </FormControl>
            <Button type="submit">送信</Button>
          </form>
        </Box>
        <Button onClick={() => signIn('email@gmail.com', 'hogehoe_1234')}>
          サインイン
        </Button>
        <Button onClick={() => signOut()} value="ログアウト">
          ログアウト
        </Button>
      </Flex>
    </>
  );
};

export default Auth;
