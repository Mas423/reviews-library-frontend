import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import SearchBooks from './pages/SearchBooks';
import Home from './pages/Home';
import BooksDetail from './pages/BooksDetail';

const App: FC = () => (
  <Router>
    <Switch>
      <Route path="/auth">
        <Login />
      </Route>
      <Route path="/book">
        <BooksDetail />
      </Route>
      <Route path="/:search">
        <SearchBooks />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
