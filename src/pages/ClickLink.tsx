import { FC } from 'react';
import { Link } from 'react-router-dom';

const ClickLink: FC = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/test/?q=book">Search</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default ClickLink;
