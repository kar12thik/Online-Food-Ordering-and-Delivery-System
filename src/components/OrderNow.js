import React from "react";
import { Link } from "react-router-dom";

function OrderNow({ dataTestId }) {
  return (
    <div className="border" data-testid={dataTestId}>
      <div className="text-center py-5 home-cont3 text-white h-60 bg-order-now-background">
          <p className="mt-16 h1 text-white text-3xl font-bold mt-5 mb-3">JUST ORDER AND WE WILL DELIVER YOU</p>
          <p className="mb-3 text-white">Pellentesque eget justo eget nibh luctus semper at ut tellus.</p>
          <Link to="/restaurants">
            <button type="button" className="btn bg-orange rounded-lg h-12 px-6">
              ORDER NOW
            </button>
        </Link>
      </div>
    </div>
  );
}

export default OrderNow;
