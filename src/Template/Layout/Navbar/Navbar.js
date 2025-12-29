
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
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Get a Quote</a>
            </li>
          </ul>
        </div>

        {/* Login Button */}
        <div className="d-none d-lg-block">
          <button className="btn login-btn">Login</button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
