import React from "react"
import { useLocation } from 'react-router-dom'

const PaymentEntry = () => {

    const location = useLocation();

    return (
        <div>
            <h1>
                product 1: 1
                product 2: 2
                product 3: 3
                product 4: 4
                product 5: 5
            </h1>
        </div>
    );
}
export default PaymentEntry;