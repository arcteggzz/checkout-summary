import React, { useEffect, useState } from "react";
import outfit from "../assets/outfit.jpg";
import "./CardEstimate.css";
import { useSelector } from "react-redux";

function CartEstimate({ cartSummary }) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const totalobj = useSelector((state) => state.detailsReducer);

  useEffect(() => {
    setTotal(totalobj.estTotal);
  }, [totalobj.estTotal]);

  return (
    <div className="estimate">
      <div className="total">
        <h1 className="h1-total">Est. total</h1>
        <h1>{`$${total}`}</h1>
      </div>
      {!isDetailsOpen && (
        <p className="blue-text" onClick={() => setIsDetailsOpen(true)}>
          see item details +
        </p>
      )}
      {isDetailsOpen && (
        <p className="blue-text" onClick={() => setIsDetailsOpen(false)}>
          hide item details -
        </p>
      )}
      {isDetailsOpen && (
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
      )}
    </div>
  );
}

export default CartEstimate;
