import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import Home from './pages/Home';
import BooksDetail from './pages/BooksDetail';
import SignUp from './components/organisms/SignUp';
import LogIn from './components/organisms/LogIn';
import User from './pages/User';
import Header from './components/organisms/Header';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="book" element={<BooksDetail />} />
      <Route path="search" element={<SearchBooks />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
      <Route path="user" element={<User />} />
      <Route path="header" element={<Header />} />
      <Route index element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
