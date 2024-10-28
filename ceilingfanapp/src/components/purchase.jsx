import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import axios from "axios";

const Purchase = () => {
    const navigate = useNavigate();
    var inventory = {};

    //Order definition (really should be refactored)
    const [order, setOrder] = useState({
        quantity: [], price: [], name: [], id: []
    });

    //Axios settings
    const axiosInstance = axios.create({
        baseURL: "https://4hfcxdr784.execute-api.us-east-2.amazonaws.com/dev/inventory-management/inventory",
        headers: { 
            "Access-Control-Allow-Origin": "*"
        }
    })

    //React mounts function twice in strict mode (dev)
    const intialized = useRef(false);

    //Call API
    useEffect(() => {
        axiosInstance.get("/", {
            responseType: "json"
        }).then(function (response) {   
            if(!intialized.current) {
                intialized.current = true;

                //Store inventory data as order itmes   
                inventory = response.data;
                for(let item in inventory) {
                    order.name.push(item);
                    order.quantity.push(0);
                    order.price.push(inventory[item].price);
                    order.id.push(inventory[item].id);
                }
                setOrder({...order});
            }
        }).catch(function (error) {
            console.log(error);
        })
    }, []);

    //Order submission
    const submit = (e) => {
        navigate("/purchase/paymentEntry", { state: { order: order, axiosInstance: axiosInstance }});
        
        console.log("Quantity: " + order.quantity);
    }

    //Order Update
    const handleUpdate = (index, event) => {
        const newQuantity = order.quantity.map((quantity, i) => {
            if(i == index) {
                return parseInt(event.target.value);
            } else {
                return quantity;
            }
        });
        setOrder({ ...order, quantity: newQuantity });
    }

    //React data
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