import "./scss/custom.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Purchase from './components/purchase';
import ViewOrder from './components/viewOrder';
import ViewConfirmation from './components/confirmation';
import PaymentEntry from './components/paymentEntry';
import ShippingEntry from './components/shippingEntry';
import Contact from './components/contact';
import AboutUs from './components/about';
import {Container, Nav, Navbar, Stack} from 'react-bootstrap';


function App() {
  return (
    <Container className="App" fluid={true}>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Stack direction="horizontal" gap={2}>
            <img
              alt=""
              src="/src/assets/fan-logo-neon.svg"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            <h3 className="brand-text">{' '}Ceiling Fan App</h3>
            </Stack>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/purchase"><b>Shop</b></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/about"><b>About Us</b></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/contact"><b>Contact</b></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Router>
        <Container className="content" fluid={true}>
          <Routes>
            <Route path="/purchase" element={<Purchase/>} />
            <Route path="/purchase/viewOrder" element={<ViewOrder/>} />
            <Route path="/purchase/viewConfirmation" element={<ViewConfirmation/>} />
            <Route path="/purchase/paymentEntry" element={<PaymentEntry />} />
            <Route path="/purchase/shippingEntry" element={<ShippingEntry />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Router>
    </Container>
  );
}

export default App;
