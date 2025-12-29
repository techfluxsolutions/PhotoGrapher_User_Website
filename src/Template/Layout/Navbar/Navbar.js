
// import './Navbar.css';


// const Navbar = () => {

//   return(
//     <h1 className='h1Text'>Hello</h1>
//   )

// };

// export default Navbar;



import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid px-4">

        {/* Logo */}
        <a className="navbar-brand fw-bold" href="#">
          Logo
        </a>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <a className="nav-link active-link" href="#">Home</a>
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
        </div>

        {/* Right Section - Login Button and Get a Quote Button */}
        <div className="navbar-right-section d-none d-lg-flex align-items-center gap-3">
          <button className="btn login-btn">Login</button>
          <button className="btn quote-btn">Get a Quote</button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
