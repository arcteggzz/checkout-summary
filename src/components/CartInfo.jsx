import React from "react";
import "./CartInfo.css";

function CartInfo({ cartSummary }) {
  return (
    <div className="cart-info">
      <div className="subtotal">
        <p className="left-text">Subtotal</p>
        <p className="subtotal-bold">{`$${cartSummary.subtotal}`}</p>
      </div>
      <div className="subtotal">
        <p className="left-text underline tooltip">
          Pickup Savings{" "}
          <span class="tooltiptext">
            We offfer you a certain discount whenever you come into the store to
            pick your item. This encourages customer relationship.
          </span>
        </p>
        <p className="subtotal-bold red">{`$-${cartSummary.pickupSavings}`}</p>
      </div>
      <div className="subtotal">
        <div className="double-line">
          <p className="left-text">Est. Taxes and fees</p>
          <p className="">(Based on 90459)</p>
        </div>
        <p className="subtotal-bold">{`$${cartSummary.taxEstimate}`}</p>
      </div>
    </div>
  );
}

export default CartInfo;
