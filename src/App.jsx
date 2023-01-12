import { useState } from "react";
import CartInfo from "./components/CartInfo";
import CartEstimate from "./components/CartEstimate";
import PromoCode from "./components/PromoCode";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CartInfo />
      <CartEstimate />
      <PromoCode />
    </div>
  );
}

export default App;
