import React from "react";
import outfit from "../assets/outfit.jpg";
import "./CardEstimate.css";

function CartEstimate() {
  return (
    <div className="estimate">
      <div className="total">
        <h1 className="h1-total">Est. total</h1>
        <h1>$104.56</h1>
      </div>
      <p className="blue-text">see item details +</p>
      <p className="blue-text">hide item details -</p>
      <div className="item">
        <img src={outfit} alt="chair-png" />
        <div className="details">
          <p>
            Essentials for Arcteggzz nt by bm-fashion - Men's Suits - Afrikrea
            메이저사이트【www.totoze1.com 】 토토사이트
          </p>
          <div className="price">
            <div>
              <p className="bold">$123.00</p>
              <p className="slash">$143.00</p>
            </div>
            <p className="bold">Qty: 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartEstimate;
