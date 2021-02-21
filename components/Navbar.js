import Link from 'next/link';
const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-0">
    <div className="container">
      <a className= "navbar-brand" href="/">Portfolio</a>
      <div className= "collapse navbar-collapse">
        <ul className= "navbar-nav ml-auto">
          <li className = "nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
          <li className = "nav-item">
            <Link href="/projects"><a className="nav-link">Projects</a></Link>
          </li>
          <li className = "nav-item">
            <Link href="/resume"><a className="nav-link">Resume</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;