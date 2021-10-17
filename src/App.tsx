import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBooks from './components/pages/SearchBooks';
import Login from './components/pages/Login';
import ClickLink from './components/pages/ClickLink';
import Result from './components/pages/Result';

const App: FC = () => (
  <Router>
    <ClickLink />
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/test/:param">
        <Result />
      </Route>
      <Route path="/">
        <SearchBooks />
      </Route>
    </Switch>
  </Router>
);

export default App;
