import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Purchase = () => {
    const [order, setOrder] = useState({
        quantity: [0, 0, 0, 0, 0], price: [15, 25, 32, 67, 999999997.98], name: ['Fan', 'Big Fan', 'Deluxe Fan', 'Deluxe Big Fan', 'Extremely Large, Extremely High Quality Fan'], id: [1, 2, 3, 4, 5]
    });

    const navigate = useNavigate();

    const getData = (e) => {
        axios.get('arn:aws:execute-api:us-east-2:442426872917:4hfcxdr784/*/GET/inventory-management/inventory')
            .then(res => { 
                const data = res.data;
                console.log("data: ", data);
            })
    }

    const submit = (e) => {
        navigate("/purchase/paymentEntry", { state: { order: order }});
        
        console.log("Quantity: " + order.quantity);
    }

    const handleUpdate = (index, event) => {
        const newQuantity = order.quantity.map((quantity, i) => {
            if(i == index) {
                return event.target.value;
            } else {
                return quantity;
            }
        });
        setOrder({ ...order, quantity: newQuantity });

    }

    return (
        <Container>
            <h1 className="PageTitle text-center">Order</h1>
            <Row className="TableHeader">
                <Col><h4>Product</h4></Col>
                <Col><h4>Price</h4></Col>
                <Col><h4>Quantity</h4></Col>
            </Row>
            <Form onSubmit = {submit}>
                <Form.Group controlId="products">
                    {order.name.map((item, index) => (
                        <Row key={index}>
                            <Col>
                                <Form.Label>{item}</Form.Label>
                            </Col>
                            <Col>
                                <Form.Label column className="PriceText">${order.price[index]}</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control type="number" defaultValue="0" min="0" onChange={(e) => {
                                    handleUpdate(index, e);
                                    }}
                                />
                            </Col>
                        </Row>
                    ))}
                </Form.Group>

                 <Row className="justify-content-center">                   
                    <Button variant="primary" type="submit" style={{width: "25%"}}>Submit Order</Button>
                </Row>
            </Form>
        </Container>
    )
}
export default Purchase;