import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setNav } from "../actions/index.js";
//import { logout } from '../redux/actions/authActions';

function NavBar() {
  const navbar = useSelector((state) => state.navbar);

  const dispatch = useDispatch();

  return (
    <nav className="w-full bg-black shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link className="nav-logo" to="/">
              <h1 className="text-white">Quick Food</h1>
              {/* <img src={Logo}/> */}
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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

const handleLogout = () => {
    Navigate("/login"); // Redirect to login page
};


function RenderHomeLinks() {
  const isLoggedIn = useSelector((state) => state.loggedInUser.loggedIn);
  const userName = useSelector((state) => state.loggedInUser.userName);

  return (
    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
      <li className="text-white">
        <Link to="/restaurants">RESTAURANTS</Link>
      </li>
      {isLoggedIn && userName.isRestaurant ? (
        <>
        <li className="text-white">
          <Link to="/restaurants">ADD FOODS</Link>
        </li>
        <li className="text-white">
          <Link to="/restaurants">MY FOODS</Link>
        </li>
        <li className="text-white">
          <Link to="/restaurants">ORDER REQUESTS</Link>
        </li>
        </>
      ) : (
        // Render customer links and register restaurant button
        <>
          {!isLoggedIn && (
            <li className="text-white">
              <Link to="/register-restaurant">
                <button type="button" className="btn rounded-lg bg-orange h-12 px-6">
                  REGISTER RESTAURANT
                </button>
              </Link>
            </li>
          )}
          {isLoggedIn && !userName.isRestaurant && (
            <li className="text-white">
            <Link to="/restaurants">MY ORDERS</Link>
          </li>
          )}
        </>
      )}
      <li className="text-white">
        {isLoggedIn ? (
          <>
            <Link>{userName}    </Link>
            <button type="button" className="btn rounded-lg bg-orange h-12 px-6" onclick= {handleLogout} >
              LOGOUT
            </button>
          </>
        ) : (
          <Link to="/login">LOGIN/REGISTER</Link>
        )}
      </li>
    </ul>
  );

  // Already There.. Below..
  // return (
  //   <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
  //     <li className="text-white">
  //       <Link to="/restaurants">RESTAURANTS</Link>
  //     </li>
  //     <li className="text-white">
  //       {isLoggedIn ? (
  //         <Link> {userName} </Link>
  //       ) : (
  //         <Link to="/login">LOGIN/REGISTER</Link>
  //       )}
  //       {/* <Link to="/login">LOGIN/REGISTER</Link> */}
  //     </li>
  //     <li className="text-white">
  //       <Link to="/register-restaurant">
  //         <button type="button" className="btn rounded-lg bg-orange h-12 px-6">
  //           REGISTER RESTAURANT
  //         </button>
  //       </Link>
  //     </li>
  //   </ul>
  // );
  // // Already There.. Above..


  ////////////////////////////////////////////////////////////
  // // Added by Dax.
  // if (isLoggedIn) {
  //   if (userName.isRestaurant) {
  //     // render restaurant links
  //     return (
  //       <ul className="navbar-nav ml-auto">
  //         <li className="nav-item">
  //           <span className="nav-link active text-uppercase mr-2"><Link to="/add-menu-items">Add Foods</Link></span>
  //         </li>
  //         <li className="nav-item">
  //           <span className="nav-link active text-uppercase mr-2"><Link to="/my-foods">My Foods</Link></span>
  //         </li>
  //         <li className="nav-item">
  //           <span className="nav-link active text-uppercase mr-2"><Link to="/order-requests">Order Requests</Link></span>
  //         </li>
  //         <li className="nav-item">
  //           <span className="nav-link active text-uppercase mr-2">{userName.userName}</span>
  //         </li>
  //         <li className="nav-item">
  //           <button type="button" className="btn btn-warning btn-sm text-uppercase mr-2 mr-1 px-3" onClick={() => this.handleLogOutBtn()}>Log Out</button>
  //         </li>
  //       </ul>
  //     )
  //   } else {
  //     // render customer links
  //     return (
  //       <ul className="navbar-nav ml-auto">
  //         <li className="nav-item">
  //           <span className="nav-link active text-uppercase mr-2"><Link to="/restaurants">Restaurants</Link></span>
  //         </li>
  //         <li className="nav-item">
  //           <span className="nav-link active text-uppercase mr-2"><Link to="/my-orders">My Orders</Link></span>
  //         </li>
  //         <li className="nav-item">
  //           <span className="nav-link active text-uppercase mr-2">{userName.userName}</span>
  //         </li>
  //         <li className="nav-item">
  //           <button type="button" className="btn btn-warning btn-sm text-uppercase mr-2 mr-1 px-3" onClick={() => this.handleLogOutBtn()}>Log Out</button>
  //         </li>
  //       </ul>
  //     )
  //   }
  // } else if (!userName.isRestaurant) {
  //   // render register restaurant button
  //   <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
  //   <li className="text-white">
  //       <Link to="/register-restaurant">
  //         <button type="button" className="btn rounded-lg bg-orange h-12 px-6">
  //           REGISTER RESTAURANT
  //         </button>
  //       </Link>
  //     </li>
  //   </ul>
  // } else {
  //   // render login/register button
  //   <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
  //   <li className="text-white">
  //       {isLoggedIn ? (
  //         <Link> {userName} </Link>
  //       ) : (
  //         <Link to="/login">LOGIN/REGISTER</Link>
  //       )}
  //       {/* <Link to="/login">LOGIN/REGISTER</Link> */}
  //     </li>
  //     </ul>
  // }
  ///////////////////////////////////////////////////////////////////////////////////////////
}

function renderUserAccountLinks() {
  return (
    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
      <li className="text-white">
        <Link to="/restaurants">RESTAURANTS</Link>
      </li>
      <li className="text-white">
        <Link to="/orders">MY ORDERS</Link>
      </li>
      <li className="hidden md:flex text-white">Firstname Lastname</li>
      <li className="text-white">
        <Link to="/">
          <button type="button" className="btn bg-orange h-12 px-6">
            LOG OUT
          </button>
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
