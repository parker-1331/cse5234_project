import React from "react"
import { useLocation } from 'react-router-dom'

const PaymentEntry = () => {

    const location = useLocation();

    return (
        <div>
            <h1>Payment</h1>
            <br></br>
            <p>Input credit card number</p>
            <input name="cardNum" type="text" required maxLength="16" />
        </div>
        <row>

                </row>
    );
}
export default PaymentEntry;