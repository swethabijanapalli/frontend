import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <h1>Foodie</h1>
      </div>
      <div className="links navbar-expand">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="mx-2 nav-link" to="/home">
              home
            </Link>
          </li>
          <li>
            <Link className="mx-2 nav-link" to="/home/about">
              about
            </Link>
          </li>
          <li>
            <Link className="mx-2 nav-link" to="/home/posts">
              posts
            </Link>
          </li>
          <li>
            <Link className="mx-2 nav-link" to="/home/add-posts">
              add post
            </Link>
          </li>
          <li>
            <Link className="mx-2 nav-link" to="/">
              logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
