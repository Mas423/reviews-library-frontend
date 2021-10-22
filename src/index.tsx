import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './Slices/SearchSlice';

ReactDOM.render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
  document.getElementById('root'),
);
