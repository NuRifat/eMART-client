import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";

const Navbar = ({ sidebarOpen }) => {
  const { user, logoutUser } = useAuthContext();

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-40 border-b border-base-200 px-4 lg:px-8 shadow-sm">
      {/* Sidebar Toggle for Mobile */}
      <div className="flex-none lg:hidden">
        <label
          htmlFor="drawer-toggle"
          className="btn btn-square btn-ghost text-slate-900 hover:text-purple-600"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? (
            <FiX className="h-5 w-5" />
          ) : (
            <FiMenu className="h-5 w-5" />
          )}
        </label>
      </div>

      {/* Dashboard Title */}
      <div className="flex-1">
        <h2 className="text-lg font-bold tracking-tight text-slate-900">
          Dashboard
        </h2>
      </div>

      {/* Right End - Profile Avatar & Dropdown */}
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar ring-1 ring-base-300 hover:ring-purple-600 transition-all"
            aria-label="User menu"
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
            {/* Greeting & Info Header */}
            <li className="px-3 py-2 border-b border-base-200 mb-1">
              <span className="font-semibold text-sm text-slate-900">
                {user?.first_name || user?.email || "Account"}
              </span>
              <span className="text-xs text-base-content/60 -mt-1 capitalize">
                Role: {user?.role?.toLowerCase() || "Customer"}
              </span>
            </li>

            {/* Menu Links */}
            <li>
              <Link
                to="/dashboard/profile"
                className="flex justify-between text-slate-900 hover:text-purple-600"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link to="#" className="text-slate-900 hover:text-purple-600">
                Settings
              </Link>
            </li>

            <div className="divider my-0"></div>

            {/* Logout Action */}
            <li>
              <button
                onClick={logoutUser}
                className="text-error hover:bg-error/10 focus:bg-error/10 font-medium"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;