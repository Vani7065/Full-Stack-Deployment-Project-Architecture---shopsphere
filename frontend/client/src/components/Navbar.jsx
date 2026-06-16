import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

  const { cart } =
  useContext(CartContext);

  const { user, logout } =
  useContext(AuthContext);

  return (

    <nav className="navbar">

      <div className="logo">

        <FaShoppingBag />

        <span>
          ShopSphere
        </span>

      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/products">
            Products
          </Link>
        </li>

        <li>
          <Link to="/cart">
            Cart ({cart.length})
          </Link>
        </li>

        {user && (
          <li>
            <Link to="/admin">
              Admin
            </Link>
          </li>
        )}

        {!user ? (

          <>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>

            <li>
              <Link to="/register">
                Register
              </Link>
            </li>
          </>

        ) : (

          <>
            <li className="user-email">
              Hello, {user.email}
            </li>

            <li>
              <button
                onClick={logout}
                className="nav-btn"
              >
                Logout
              </button>
            </li>
          </>

        )}

      </ul>

    </nav>

  );
}

export default Navbar;