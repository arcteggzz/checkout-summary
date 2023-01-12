import React from "react";
import "./CartInfo.css";

function CartInfo() {
  return (
    <div className="cart-info">
      <div className="subtotal">
        <p className="left-text">Subtotal</p>
        <p className="subtotal-bold">$100.00</p>
      </div>
      <div className="subtotal">
        <p className="left-text underline">Pickup Savings</p>
        <p className="subtotal-bold red">$-3.09</p>
      </div>
      <div className="subtotal">
        <div className="double-line">
          <p className="left-text">Est. Taxes and fees</p>
          <p className="">(Based on 90459)</p>
        </div>
        <p className="subtotal-bold">$8.50</p>
      </div>
    </div>
  );
}

export default CartInfo;
