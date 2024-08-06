export function Navbar() {
  return (
    <>
      <header>
        <img
          src="/src/assets/react.svg"
          alt="My little dark age"
          className="nav-logo"
        />
        <h1 className="nav-title">Library</h1>
        <div className="nav-container">
          <a className="nav-button" href="#home">
            Home
          </a>
          <a className="nav-button" href="#about">
            About
          </a>
          <a className="nav-button" href="#services">
            Services
          </a>
          <a className="nav-button" href="#contact">
            Contact
          </a>
          <a className="nav-button" href="#login">
            Login
          </a>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <small>&copy; 2024 Library. All rights reserved.</small>
    </footer>
  );
}
