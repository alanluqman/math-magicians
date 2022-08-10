import { Link } from 'react-router-dom';
import './navigation.css';
import logo from './math-logo.webp';

function Navigation() {
  return (
    <>
      <div className="nav-container">
        <img className="logo" src={logo} alt="logo" />
        <nav style={{ color: '#fff' }}>
          <Link className="nav-items" to="/">Home</Link>
          <Link className="nav-items" to="/calculator">Calculator</Link>
          <Link className="nav-items" to="/quote">Quote</Link>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
