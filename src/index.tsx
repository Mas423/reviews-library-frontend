import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

// TMP:Auth0環境変数
const getClientId = () => {
  const clientId = process.env.AUTH0_CLIENT_ID;
  if (!clientId) throw new Error('Auth0の環境変数 ClientId がありません。');

  return clientId;
};

const getDomain = () => {
  const domain = process.env.AUTH0_DOMAIN;
  if (!domain) throw new Error('Auth0の環境変数 Domain がありません。');

  return domain;
};

ReactDOM.render(
  <Auth0Provider
    clientId={getClientId()}
    domain={getDomain()}
    redirectUri={window.location.origin}
  >
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Auth0Provider>,
  document.getElementById('root'),
);
