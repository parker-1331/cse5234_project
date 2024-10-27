import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import axios from "axios";

const Purchase = () => {
    const axiosInstance = axios.create({
        baseURL: "https://4hfcxdr784.execute-api.us-east-2.amazonaws.com/dev/inventory-management/inventory",
        headers: { 
            "Access-Control-Allow-Origin": "*"
        }
    })

    var inventory;

    axiosInstance.get("/", {
        responseType: "json"
    }).then(function (response) {
        console.log(response);
        inventory = JSON.parse(response.data);
        console.log(inventory);
    }).catch(function (error) {
        console.log(error);
    })

    const [order, setOrder] = useState({
        quantity: [0, 0, 0, 0, 0], price: [15, 25, 32, 67, 999999997.98], name: ['Fan', 'Big Fan', 'Deluxe Fan', 'Deluxe Big Fan', 'Extremely Large, Extremely High Quality Fan']
    });

    const navigate = useNavigate();
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