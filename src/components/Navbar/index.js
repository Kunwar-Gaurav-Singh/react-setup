import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleWindowResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="nav">
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <li className="items">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="items">
            <Link className="link" to="/service">
              Services
            </Link>
          </li>
        </ul>
      )}
      <button onClick={() => setToggleMenu(!toggleMenu)} className="btn">
        Menu
      </button>
    </nav>
  );
};

export default Navbar;
