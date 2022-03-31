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
import { signOut } from '../../features/auth/signOut';
import { Inputs, signUp } from '../../features/auth/signUp';
import { signIn } from '../../features/auth/signIn';

const SignUp: FC = () => {
  // react-fook-form試し
  const { register, handleSubmit, watch } = useForm<Inputs>();

  // 引数に渡した入力値を監視
  console.log(watch('email'));
  console.log(watch('password'));
  console.log(watch('username'));

  return (
    <>
      <Flex>
        <Heading>ユーザ管理</Heading>
        <Box>
          <form onSubmit={handleSubmit(signUp)}>
            <FormControl>
              <FormControl>
                <FormLabel>ユーザ名</FormLabel>

                <Input
                  defaultValue="hogehoge"
                  placeholder="ユーザ名"
                  {...register('username')}
                />
              </FormControl>
              <FormLabel>メールアドレス</FormLabel>

              <Input
                defaultValue="email@email.com"
                placeholder="メールアドレス"
                {...register('email')}
              />
            </FormControl>
            <FormControl>
              <FormLabel>パスワード</FormLabel>
              <Input
                defaultValue="Password_123"
                placeholder="パスワード"
                {...register('password')}
              />
            </FormControl>
            <Button type="submit">アカウント作成</Button>
          </form>
        </Box>
        <Button onClick={() => signIn}>サインイン</Button>
        <Button onClick={() => signOut()} value="ログアウト">
          ログアウト
        </Button>
      </Flex>
    </>
  );
};

export default SignUp;
