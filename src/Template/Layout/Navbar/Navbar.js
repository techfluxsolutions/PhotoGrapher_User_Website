import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Navigation Links - Centered */}
        <ul className="navbar-menu">
          <li className="nav-item">
            <a className="nav-link active" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Join Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
        </ul>

        {/* Right Section - Buttons */}
        <div className="navbar-actions">
          <button className="btn-login">Login</button>
          <button className="btn-quote">Get a Quote</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
