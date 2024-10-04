//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import ViewOrder from './components/viewOrder';
import ViewConfirmation from './components/confirmation';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Container className="App" fluid={true}>
      <Router>
        <Container className="content" fluid={true}>
          <Routes>
            <Route path="/purchase/viewOrder" element={<ViewOrder/>} />
            <Route path="/purchase/viewConfirmation" element={<ViewConfirmation/>} />
          </Routes>
        </Container>
      </Router>
    </Container>
  );
}

export default App;
