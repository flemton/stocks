import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'HOME' },
  { path: 'details', text: 'DETAILS' },
  { path: 'currencies', text: 'CURRENCIES' },
];

const Navbar = () => (
  <nav className="nav">
    <h1 className="homepage">Title</h1>
    <ul className="nav-items">
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
