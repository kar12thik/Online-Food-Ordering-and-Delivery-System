import { Link } from 'react-router-dom';

function OrderNow() {
  return(
    <div>
      <div className="nav-item text-white">
        <Link to='/restaurants'>
            <button type="button" className="btn bg-orange h-12 px-6">ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default OrderNow;
