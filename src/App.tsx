import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import ClickLink from './components/pages/ClickLink';

const App: FC = () => (
  <Router>
    <ClickLink />
    <div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
