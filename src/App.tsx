import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BooksSearchWindow from './components/organisms/BooksSearchWindow';
import Login from './pages/Login';
import SearchBooks from './pages/SearchBooks';

const App: FC = () => (
  <Router>
    <BooksSearchWindow />
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/:search">
        <SearchBooks />
      </Route>
      <Route exact path="/" />
    </Switch>
  </Router>
);

export default App;
