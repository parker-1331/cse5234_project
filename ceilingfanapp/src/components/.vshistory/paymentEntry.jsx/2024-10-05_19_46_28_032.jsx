import React from "react"
import { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Stack, Table } from 'react-bootstrap';

const PaymentEntry = () => {

    const location = useLocation();
    const [payment, setPayment] = useState({ cardNum: '', expDate: '', ccv: '', cardName: '', });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/purchase/shippingEntry", { payment: payment, setPayment: setPayment });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Payment</h1>
                <br></br>
                <p>Credit card number</p>
                <input
                    name="cardNum"
                    type="text"
                    required
                    minLength="16"
                    maxLength="16"
                    onChange={(e) =>                
                        setPayment({ ...payment, cardNum: e.target.value })
                    }
                />
                <br></br><br></br>
                <p>Expiration date (MM/YY)</p>
                <input
                    name="expDate"
                    type="text"
                    required
                    minLength="5"
                    maxLength="5"
                    size="10"
                    onChange={(e) =>                
                        setPayment({ ...payment, expDate: e.target.value })
                    }
                />
                <br></br><br></br>
                <p>CCV</p>
                <input
                    name="ccv"
                    type="text"
                    required
                    minLength="3"
                    maxLength="3"
                    size="10"
                    onChange={(e) =>                
                        setPayment({ ...payment, ccv: e.target.value })
                    }
                />
                <br></br><br></br>
                <p>Name on card</p>
                <input
                    name="cardName"
                    type="text"
                    required
                    onChange={(e) =>                
                        setPayment({ ...payment, cardName: e.target.value })
                    }
                />
                <br></br><br></br>
                    <button type="submit">To Shipping</button>
            </form>
       </div>
    );
}
export default PaymentEntry;