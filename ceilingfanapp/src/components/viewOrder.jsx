import React, { useEffect } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

function DisplayOrderSummary(order) {
  return (
  <Table striped className="">
    <thead>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {order.buyQuantity.map(function(quantity, index) {
        return (<tr key={index}>
          <td>{order.name[index]}</td>
          <td>{order.buyQuantity[index]}</td>
          <td>{order.price[index]}</td>
        </tr>
        )
      })}
    </tbody>
  </Table>
  )
}


function SubmitOrder() {
  const navigate = useNavigate();
  
  function handleClick() {
    let confirmationNum = 12345; // Placeholder, eventually need real value here!
    let fake_order = {buyQuantity: [1,2,3,4,5], price: [10,20,30,40,50], name: ["Fan1", "Fan2", "Fan3", "Fan4", "Fan5"]}

    navigate(
      "/purchase/viewConfirmation", 
      {state: 
        {confirmationNumber: confirmationNum, 
          order: fake_order}});
  }
  
  return (
    <Button onClick={handleClick}>
      Confirm Order
      </Button>
  )
}

const ViewOrder = () => {

  const location = useLocation();
  
   return (
    <Container fluid className="text-center">
      <Row>
        <Col>
          <h1>Hello!</h1>
        </Col>
        <Col>
          <h1>Order Summary:</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {SubmitOrder()}
        </Col>
      </Row>
    </Container>
  );
}

export default ViewOrder;