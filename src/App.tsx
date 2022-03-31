import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import Home from './pages/Home';
import BooksDetail from './pages/BooksDetail';
import SignIn from './components/organisms/SignIn';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/book" element={<BooksDetail />} />
      <Route path="/:search" element={<SearchBooks />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
