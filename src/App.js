import "./App.css";
import Chips from "./Chips";
import OrangeJuice from "./OrangeJuice";
import Chocolate from "./Chocolate";
import VendingMachine from "./VendingMachine";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<VendingMachine />}></Route>
          <Route exact path="/chips" element={<Chips />}></Route>
          <Route exact path="/orange-juice" element={<OrangeJuice />}></Route>
          <Route exact path="/chocolate" element={<Chocolate />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
