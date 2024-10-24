import React, { useEffect } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import {Container, Row, Col, Button, Stack, Table} from 'react-bootstrap';
import { DisplayOrderSummary } from "./confirmation";
import axios from "axios";

const client = axios.create({
  baseURL: "https://4hfcxdr784.execute-api.us-east-2.amazonaws.com/dev"
  // baseURL: "https://4hfcxdr784.execute-api.us-east-2.amazonaws.com/dev/inventory-management/inventory"
});

const postOrder = (title, body) => {
  console.log(body)
  
  client
    .post('/order-processing/order', body)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    
}

function SubmitOrder() {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state.order;
  
  function handleSubmit() {

    postOrder('', location.state);

    let confirmationNum = 12345; // Placeholder, eventually need real value here!

    navigate(
      "/purchase/viewConfirmation", 
      {state: 
        {confirmationNumber: confirmationNum, 
          order: order, payment: location.state.payment, shipping: location.state.shipping}});
  }

  function handleCancel() { // Return to previous page.
    navigate("/purchase")
  }
  
  return (
    <Row>
      <Col className="d-flex justify-content-end">
      <Button variant="secondary" style={{width: "50%"}} onClick={handleCancel}>
        Cancel
      </Button>
      </Col>
      <Col className="d-flex justify-content-start">
      <Button variant="primary" style={{width: "50%"}} onClick={handleSubmit}>
        Confirm Order
      </Button>
      </Col>
      </Row>
  )
}

const ViewOrder = () => {

  const location = useLocation();
  const order = location.state.order;

  console.log(location);

   return (
    <Container fluid>
      <Row>
        <Col>
          <h4 className="PageTitle TableAllignedPageHeader">Order Summary:</h4>
        </Col>
      </Row>
      {DisplayOrderSummary(order)}  
      <Row>
        <Col className="text-center">
          <h2>Does everything look right?</h2>
        </Col>
      </Row>
      {SubmitOrder()}
    </Container>
  );
}

export default ViewOrder;