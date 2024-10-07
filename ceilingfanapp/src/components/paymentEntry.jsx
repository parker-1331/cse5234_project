import React from "react"
import { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import {Container, Form, Button} from 'react-bootstrap';

const PaymentEntry = () => {

    const location = useLocation();
    const [payment, setPayment] = useState({ cardNum: '', expDate: '', cvv: '', cardName: '', });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/purchase/shippingEntry", { payment: payment, setPayment: setPayment });

        console.log("Card Number: ", payment.cardNum);
        console.log("Expiration Date: ", payment.expDate);
        console.log("CVV: ", payment.cvv);
        console.log("Name on Card: ", payment.cardName);
    }

    return (
        <Container>
          <h1>Payment</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="cardNum">
              <Form.Label>Credit Card Number</Form.Label>
              <Form.Control 
                type="text" 
                required
                onChange={(e) =>                
                  setPayment({ ...payment, cardNum: e.target.value })
                }
                minLength="16"
                maxLength="16"
              />
              <Form.Control.Feedback>Please enter a credit card number.</Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group controlId="expDate">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control 
                type="text"
                required
                minLength="5"
                maxLength="5"
                onChange={(e) =>                
                  setPayment({ ...payment, expDate: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="cvv">
              <Form.Label>CVV</Form.Label>
              <Form.Control 
                type="text"
                required
                minLength="3"
                maxLength="4"
                onChange={(e) =>                
                  setPayment({ ...payment, cvv: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="cardName">
              <Form.Label>Name on Card</Form.Label>
              <Form.Control 
                type="text"
                required
                onChange={(e) =>                
                  setPayment({ ...payment, cardName: e.target.value })
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
          </Form> 
       </Container>
    );
}
export default PaymentEntry;