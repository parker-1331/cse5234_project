import React from "react"
import { useLocation } from 'react-router-dom'
import { Container, Row, Col, Button, Stack, Table } from 'react-bootstrap';

const PaymentEntry = () => {

    const location = useLocation();

    return (
        <>
            <div>
                <h1>Payment</h1>
                <br></br>
                <p>Credit card number</p>
                <input name="cardNum" type="text" required maxLength="16" />
                <br></br>
                <p>Expiration date (MM/YY)</p>
                <input name="expDate" type="text" required maxLength="5" size="8" />
                <br></br>
                <p>CCV</p>
                <input name="ccv" type="text" required maxLength="3" size="8" />
                <br></br>
                <p>Name on card</p>
                <input name="nameOnCard" type="text" />
            </div>
        </>
    );
}
export default PaymentEntry;