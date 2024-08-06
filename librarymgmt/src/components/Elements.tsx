export function Navbar() {
  return (
    <>
      <header>
        <h1>My Website</h1>
        <nav>
          <img
            src="/src/assets/react.svg"
            width="40px"
            alt="My little dark age"
          />
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
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
