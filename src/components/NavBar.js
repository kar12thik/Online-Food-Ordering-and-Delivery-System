import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar w-full flex bg-black p-8 h-12 items-center">
        <Link className="nav-logo" to="/">
          <h1 className="text-white">Quick Food</h1>
        </Link>
        <div className="nav-options ">{renderHomeLinks()}</div>
      </nav>
    </div>
  );
}

function renderHomeLinks() {
  return (
    <div className="">
      <div className="nav-item text-white text-xl">
        <Link to="/restaurants">RESTAURANTS</Link>
      </div>
      <div className=" text-white  text-xl">
        <Link to="/login">LOGIN/REGISTER</Link>
      </div>
      <div className=" text-white">
        <Link to="/register-restaurant">
          <button type="button" className="btn bg-orange h-12 px-6">
            REGISTER RESTAURANT
          </button>
        </Link>
      </div>
    </div>
  );
}

function renderUserAccountLinks() {}

export default NavBar;
