import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import Login from './pages/Login';
import ClickLink from './pages/ClickLink';
import Result from './pages/Result';

const App: FC = () => (
  <Router>
    <ClickLink />
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/:search">
        <Result />
      </Route>
      <Route exact path="/">
        <SearchBooks />
      </Route>
    </Switch>
  </Router>
);

export default App;
