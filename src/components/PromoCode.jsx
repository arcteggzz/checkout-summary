import React, { useState } from "react";
import "./PromoCode.css";

function PromoCode() {
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  return (
    <div className="promo-code-card">
      {!isPromoOpen && (
        <p className="blue-text" onClick={() => setIsPromoOpen(true)}>
          apply Promo Code +
        </p>
      )}
      {isPromoOpen && (
        <p className="blue-text" onClick={() => setIsPromoOpen(false)}>
          hide Promo Code -
        </p>
      )}
      {isPromoOpen && (
        <div className="promo-code">
          <h4>Promo Code</h4>
          <input type="text" placeholder="Enter Promo Code" />
          <button>Apply PromoCode</button>
        </div>
      )}
    </div>
  );
}

export default PromoCode;
