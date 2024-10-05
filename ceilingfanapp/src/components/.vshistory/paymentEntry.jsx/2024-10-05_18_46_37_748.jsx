import React from "react"
import { useLocation } from 'react-router-dom'

const PaymentEntry = () => {

    const location = useLocation();

    return (
        <row>
            <h1>Payment</h1>
            <br></br>
            <p>Input credit card number</p>
            <input name="cardNum" type="text" required maxLength="16" />
        </row>
    );
}
export default PaymentEntry;