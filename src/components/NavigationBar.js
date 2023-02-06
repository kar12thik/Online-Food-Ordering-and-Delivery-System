import { Link } from 'react-router-dom';

function NavigationBar() {
    return(
            <div>
                <nav className="navbar bg-black p-10 h-10 items-center">
                    <Link className="nav-logo" to='/'>
                        {/* <img src={require("./images/app-logo.jpg")} alt="Application Logo" /> */}
                        <h1 className='text-white'>Quick Food</h1>
                    </Link>
                    <div className="nav-options ">
                        {renderHomeLinks()}
                    </div>
                </nav>
            </div>
        );
    }

    function renderHomeLinks() {
        return (
            <div className="nav-links flex items-center">
                <div className="nav-item text-white ml-20 text-2xl">
                    <Link to='/restaurants'>RESTAURANTS</Link>
                </div>
                <div className="nav-item text-white ml-10 text-2xl">
                    <Link to='/login'>LOGIN/REGISTER</Link>
                </div>
                <div className="nav-item text-white ml-80">
                    <Link to='/register-restaurant'>
                        <button type="button" className="btn bg-orange h-12 px-6">REGISTER RESTAURANT</button>
                    </Link>
                </div>
            </div>
        );
    }

    function renderUserAccountLinks() {

    }

export default NavigationBar;
