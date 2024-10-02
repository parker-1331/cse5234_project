import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import ViewConfirmation from './components/confirmation';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <Routes>
            <Route path="/purchase/viewConfirmation" element={<ViewConfirmation/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
