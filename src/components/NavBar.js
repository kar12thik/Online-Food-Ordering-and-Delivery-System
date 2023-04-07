import { auth, logsRef } from "../config/firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../actions/index";
import { setNav } from "../actions/index.js";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import * as Sentry from "@sentry/react";

function NavBar() {
  const navbar = useSelector((state) => state.navbar);

  const dispatch = useDispatch();
  return (
    <nav className="w-full bg-slate-200 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link className="nav-logo" to="/">
              <h1 className="text-black font-bold">Quick Food</h1>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-800 rounded-md outline-none focus:border-black focus:border"
                onClick={() => dispatch(setNav())}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            {RenderHomeLinks()}
          </div>
        </div>
      </div>
    </nav>
  );
}

function RenderHomeLinks() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.loggedInUser.loggedIn);
  const userName = useSelector((state) => state.loggedInUser.userName);
  const isRestaurant = useSelector((state) => state.loggedInUser.isRestaurant);
  const dispatch = useDispatch();

  return (
    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
      <li className="text-black font-bold">
        <Link to="/restaurants">RESTAURANTS</Link>
      </li>
      {isLoggedIn && isRestaurant ? (
        <>
          <li className="text-black font-bold">
            <Link to="/add-menu-items">ADD FOODS</Link>
          </li>
          <li className="text-black font-bold">
            <Link to="/my-foods">MY FOODS</Link>
          </li>
          <li className="text-black font-bold">
            <Link to="/order-requests">ORDER REQUESTS</Link>
          </li>
        </>
      ) : (
        // Render customer links and register restaurant button
        <>
          {!isLoggedIn && (
            <li className="text-black font-bold">
              <Link to="/register-restaurant">
                <button type="button" className="btn h-12 px-6">
                  REGISTER RESTAURANT
                </button>
              </Link>
            </li>
          )}
          {isLoggedIn && !userName.isRestaurant && (
            <li className="text-black font-bold">
              <Link to="/my-orders">MY ORDERS</Link>
            </li>
          )}
        </>
      )}
      <li className="text-black font-bold space-x-4">
        {isLoggedIn ? (
          <>
            <Link className="bg-gradient-to-r from-blue-400 via-yellow-500 to-pink-500 text-black py-2 px-4 rounded-full">
              {userName}{" "}
            </Link>

            <Link to="/login">
              <button
                type="button"
                className="btn rounded-lg bg-orange h-12 px-6"
                onClick={(event) => {
                  event.preventDefault();
                  logsRef.push({
                    message: `User ${userName} Logged Out!`,
                    timestamp: firebase.database.ServerValue.TIMESTAMP,
                  });
                  Sentry.captureMessage(`User ${userName} Logged Out!`);
                  dispatch(logOutUser());
                  signOut(auth);
                  navigate("/");
                }}
              >
                LOGOUT
              </button>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <button
              type="button"
              className="btn rounded-lg bg-orange h-12 px-6"
            >
              LOGIN/REGISTER
            </button>
          </Link>
        )}
      </li>
    </ul>
  );
}

export default NavBar;
