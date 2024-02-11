import { Link, NavLink } from 'react-router-dom';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>Coffellity</h1>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;