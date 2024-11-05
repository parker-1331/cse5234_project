import React, { useState } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import {Container, Row, Col, Button, Modal} from 'react-bootstrap';
import { DisplayOrderSummary } from "./confirmation";
import axios from "axios";

const client = axios.create({
  baseURL: "https://4hfcxdr784.execute-api.us-east-2.amazonaws.com/dev"
});


function SubmitOrder() {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state.order;

  const [showModal, setShowModal] = useState(false);
  
  function handleSubmit() {

    client
      .post('/order-processing/order', location.state)
      .then((response) => {
        console.log(response.data); // confirmation number
        let confirmationNum = response.data.confirmationNumber;
        navigate  (
          "/purchase/viewConfirmation", 
          {state: 
            {confirmationNumber: confirmationNum, 
              order: order, payment: location.state.payment, shipping: location.state.shipping}});
      })
      .catch((error) => {
        console.log(error.response.data); // list of items with lower availability.
        setShowModal(true);
      });

    // postOrder('', location.state);

    // let confirmationNum = 12345; // Placeholder, eventually need real value here!

    
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
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>We're sorry!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          It appears we do not have enough stock for one or more items you ordered.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCancel}>
            Modify Order
          </Button>
        </Modal.Footer>
      </Modal>
      </Col>
      </Row>
  )
}

const ViewOrder = () => {

  const location = useLocation();
  const order = location.state.order;

  // console.log(location);

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