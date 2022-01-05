import { LogoutOptions, useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  logout: (options?: LogoutOptions | undefined) => void;
};

const Component: FC<Props> = ({ logout }) => (
  <Button onClick={() => logout({ returnTo: window.location.origin })}>
    Log Out
  </Button>
);

const Container: FC = () => {
  const { logout } = useAuth0();

  return <Component logout={logout} />;
};

export default Container;
