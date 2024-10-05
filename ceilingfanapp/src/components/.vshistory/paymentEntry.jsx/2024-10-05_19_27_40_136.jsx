import React from "react"
import { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Stack, Table } from 'react-bootstrap';

const PaymentEntry = () => {

    const location = useLocation();
    const [payment, setPayment] = useState({ cardNum: '', expDate: '', ccv: '', cardName: '', });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate("/purchase/shippingEntry", { payment: payment, setPayment: setPayment });
    }

    return (
       <div>
           <h1>Payment</h1>
           <br></br>
           <p>Credit card number</p>
           <input name="cardNum" type="text" required maxLength="16" />
           <br></br><br></br>
           <p>Expiration date (MM/YY)</p>
           <input name="expDate" type="text" required maxLength="5" size="8" />
           <br></br><br></br>
           <p>CCV</p>
           <input name="ccv" type="text" required maxLength="3" size="8" />
           <br></br><br></br>
           <p>Name on card</p>
           <input name="nameOnCard" type="text" />
            <br></br><br></br>
            <button onClick={handleSubmit}>To Shipping</button>
       </div>
    );
}
export default PaymentEntry;