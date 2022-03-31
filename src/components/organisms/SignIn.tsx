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
import { LoginInputs, signIn } from '../../features/auth/signIn';

const SignIn: FC = () => {
  // react-fook-form試し
  const { register, handleSubmit, watch } = useForm<LoginInputs>();

  // 引数に渡した入力値を監視
  console.log(watch('email'));
  console.log(watch('password'));

  return (
    <>
      <Flex>
        <Heading>ユーザ管理</Heading>
        <Box>
          <form onSubmit={handleSubmit(signIn)}>
            <FormControl>
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
            <Button type="submit">ログイン</Button>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default SignIn;
