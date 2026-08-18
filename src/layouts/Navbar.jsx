import { Link, NavLink } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import useCartContext from "../hooks/useCartContext";

const Navbar = () => {
  const { user, logoutUser } = useAuthContext();
  const { cart } = useCartContext();

  const totalItems = cart?.items?.length || 0;
  const subtotal = cart?.total_price || 0;

  // Custom link class: Black text by default, turns purple on hover or when active
  const navLinkClass = ({ isActive }) =>
    `font-medium text-slate-900 transition-colors duration-200 ${
      isActive ? "text-purple-600 font-semibold" : "hover:text-purple-600"
    }`;

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-200 px-4 lg:px-8">
      {/* ---------------- Navbar Start ---------------- */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle lg:hidden"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-slate-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-base-200"
          >
            <li>
              <NavLink to="/shop" className={navLinkClass}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Brand Logo */}
        <Link
          className="btn btn-ghost text-2xl font-bold tracking-tight text-primary hover:bg-transparent"
          to="/"
        >
          eMART<span className="text-secondary">.</span>
        </Link>
      </div>

      {/* ---------------- Navbar Center ---------------- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink to="/shop" className={navLinkClass}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className={navLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* ---------------- Navbar End ---------------- */}
      <div className="navbar-end gap-2">
        {user ? (
          <div className="flex items-center gap-3">
            {/* Cart Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle hover:text-purple-600"
                aria-label="View shopping cart"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-slate-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {totalItems > 0 && (
                    <span className="badge badge-sm bg-purple-600 border-purple-600 text-white indicator-item font-bold">
                      {totalItems}
                    </span>
                  )}
                </div>
              </div>

              {/* Cart Content Card */}
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-50 mt-3 w-60 shadow-xl border border-base-200"
              >
                <div className="card-body">
                  <span className="text-base font-bold text-slate-900">
                    {totalItems} {totalItems === 1 ? "Item" : "Items"}
                  </span>
                  <span className="text-sm font-medium text-base-content/70">
                    Subtotal:{" "}
                    <span className="text-purple-600 font-bold">
                      ${subtotal.toLocaleString()}
                    </span>
                  </span>
                  <div className="card-actions mt-2">
                    <Link to="/dashboard/cart" className="w-full">
                      <button className="btn bg-purple-600 hover:bg-purple-700 text-white border-none btn-block btn-sm">
                        View Cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Avatar Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar ring-1 ring-base-300 hover:ring-purple-600 transition-all"
              >
                <div className="w-9 rounded-full">
                  <img
                    alt="User avatar"
                    src={
                      user?.avatar ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-56 p-2 shadow-xl border border-base-200 gap-1"
              >
                <li className="px-3 py-2 border-b border-base-200 mb-1">
                  <span className="font-semibold text-sm text-slate-900">
                    {user?.first_name || user?.email || "Account"}
                  </span>
                  <span className="text-xs text-base-content/60 -mt-1 capitalize">
                    Role: {user?.role?.toLowerCase() || "Customer"}
                  </span>
                </li>

                <li>
                  <Link to="/dashboard/profile" className="flex justify-between hover:text-purple-600">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="hover:text-purple-600">
                    Dashboard
                  </Link>
                </li>
                <div className="divider my-0"></div>
                <li>
                  <button
                    onClick={logoutUser}
                    className="text-error hover:bg-error/10 focus:bg-error/10"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          /* Unauthenticated State */
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-ghost text-slate-900 hover:text-purple-600 btn-sm">
              Login
            </Link>
            <Link to="/register" className="btn bg-purple-600 hover:bg-purple-700 text-white border-none btn-sm">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;