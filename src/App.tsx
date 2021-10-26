import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BooksSearchWindow from './components/organisms/BooksSearchWindow';
import Login from './pages/Login';
import ClickLink from './pages/ClickLink';
import SearchBooks from './pages/SearchBooks';
import NavigationBar from './components/organisms/NavigationBar';

const App: FC = () => (
  <Router>
    <NavigationBar />
    <BooksSearchWindow />
    <ClickLink />
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
