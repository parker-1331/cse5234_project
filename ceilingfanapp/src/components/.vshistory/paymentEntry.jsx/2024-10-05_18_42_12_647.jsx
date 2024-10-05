import React from "react"
import { useLocation } from 'react-router-dom'

const PaymentEntry = () => {

    const location = useLocation();

    return (
        <div>
            <h1>Payment</h1>
            <input type="text" />
        </div>
    );
}
export default PaymentEntry;