import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import {Container, Row, Col, Button, Stack, Table} from 'react-bootstrap';
import { DisplayOrderSummary } from "./confirmation";

function SubmitOrder() {
  const navigate = useNavigate();
  
  function handleSubmit() {
    let confirmationNum = 12345; // Placeholder, eventually need real value here!
    let fake_order = {buyQuantity: [1,2,3,4,5], price: [10,20,30,40,50], name: ["Fan1", "Fan2", "Fan3", "Fan4", "Fan5"]}

    navigate(
      "/purchase/viewConfirmation", 
      {state: 
        {confirmationNumber: confirmationNum, 
          order: fake_order}});
  }

  function handleCancel() { // Return to previous page.
    navigate(-1)
  }
  
  return (
    <Row>
      <Col>
      <Button variant="secondary" style={{width: "95%"}} onClick={handleCancel}>
        Go Back
      </Button>
      </Col>
      <Col>
      <Button variant="primary" style={{width: "95%"}} onClick={handleSubmit}>
        Confirm Order
      </Button>
      </Col>
      </Row>
  )
}

const ViewOrder = () => {

  let fake_order = {buyQuantity: [1,2,3,4,5], price: [10,20,30,40,50], name: ["Fan1", "Fan2", "Fan3", "Fan4", "Fan5"]}

  const location = useLocation();
  
   return (
    <Container fluid>
      <Row>
        <Col>
          <h2>Does everything look right?</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Order Summary:</h4>
        </Col>
      </Row>
    {DisplayOrderSummary(fake_order)}  
    
    {SubmitOrder()}
    </Container>
  );
}

export default ViewOrder;