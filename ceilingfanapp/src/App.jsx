import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import ViewOrder from './components/viewOrder';
import ViewConfirmation from './components/confirmation';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <Routes>
            <Route path="/purchase/viewOrder" element={<ViewOrder/>} />
            <Route path="/purchase/viewConfirmation" element={<ViewConfirmation/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
