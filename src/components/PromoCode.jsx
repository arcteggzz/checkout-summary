import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEstTotalDiscount,
  setPromoCodeApplied,
} from "../redux/features/Details/detailsSlice";
import "./PromoCode.css";

function PromoCode() {
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [userText, setUserText] = useState("");
  const dispatch = useDispatch();
  const promoCodeApplied = useSelector(
    (state) => state.detailsReducer.promoCodeApplied
  );
  const updateValue = (e) => {
    setUserText(e.target.value);
  };
  const applyPromoCode = () => {
    if (userText === "DISCOUNT" && !promoCodeApplied) {
      dispatch(setEstTotalDiscount());
      dispatch(setPromoCodeApplied());
    }
  };
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
          <input
            type="text"
            placeholder="Enter Promo Code"
            onChange={(e) => {
              updateValue(e);
            }}
          />
          <button
            onClick={applyPromoCode}
            disabled={promoCodeApplied}
            className={promoCodeApplied ? "disabled" : "active"}
          >
            Apply PromoCode
          </button>
        </div>
      )}
    </div>
  );
}

export default PromoCode;
