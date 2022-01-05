import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  loginWithRedirect: () => void;
};

const Component: FC<Props> = ({ loginWithRedirect }) => (
  <Button onClick={loginWithRedirect}>Login</Button>
);

const Container: FC = () => {
  const { loginWithRedirect } = useAuth0();

  return <Component loginWithRedirect={loginWithRedirect} />;
};

export default Container;
