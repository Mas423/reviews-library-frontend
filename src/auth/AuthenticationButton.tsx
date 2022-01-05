import { useAuth0 } from '@auth0/auth0-react';
import { FC } from 'react';
import LoginButton from './Login';
import LogoutButton from './Logout';

type Props = {
  isAuthenticated: boolean;
};

const Component: FC<Props> = ({ isAuthenticated }) =>
  isAuthenticated ? <LogoutButton /> : <LoginButton />;

const Container: FC = () => {
  const { isAuthenticated } = useAuth0();

  return <Component isAuthenticated={isAuthenticated} />;
};

export default Container;
