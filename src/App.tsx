import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import Home from './pages/Home';
import BooksDetail from './pages/BooksDetail';
import SignIn from './components/organisms/SignIn';
import SignUp from './components/organisms/SignUp';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="book" element={<BooksDetail />} />
      <Route path="search" element={<SearchBooks />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<SignIn />} />
      <Route index element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
