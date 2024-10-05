import React from "react"
import { useLocation } from 'react-router-dom'

const PaymentEntry = () => {

    const location = useLocation();

    return (
        <>
            <div>
                <h1>Payment</h1>
                <br></br>
                <p>Credit card number</p>
                <input name="cardNum" type="text" required maxLength="16" />
            </div>
            <div>
                <Container fluid>
                <Row>
                    <Col>
                        <p>Name on card</p>
                        <input name="nameOnCard" type="text" />
                    </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <p>Name on card</p>
                <input name="nameOnCard" type="text" />
            </div>
        </>
    );
}
export default PaymentEntry;