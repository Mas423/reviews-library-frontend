import { FC } from 'react';
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
import { signOut } from '../features/auth/signOut';
import { signUp } from '../features/auth/signUp';
import { signIn } from '../features/auth/signIn';

const Auth: FC = () => {
  const { register, handleSubmit, watch } = useForm();

  console.log(watch('example'));

  return (
    <>
      <Flex>
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
                {...register('example')}
              />
            </FormControl>
            <Button type="submit">送信</Button>
          </form>
        </Box>
        <Button onClick={() => signIn('aiueo@gmail.com', 'aiueoaiueo_123')}>
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
