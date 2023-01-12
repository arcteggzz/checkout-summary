import { useState } from "react";
import CartInfo from "./components/CartInfo";
import CartEstimate from "./components/CartEstimate";
import PromoCode from "./components/PromoCode";

import "./App.css";

function App() {
  const cartSummary = {
    subtotal: 120.03,
    pickupSavings: 3.09,
    taxEstimate: 8.05,
  };

  return (
    <div className="App">
      <CartInfo cartSummary={cartSummary} />
      <CartEstimate cartSummary={cartSummary} />
      <PromoCode />
    </div>
  );
}

export default App;
