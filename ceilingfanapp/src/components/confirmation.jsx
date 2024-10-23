import React from "react";
import {useLocation} from 'react-router-dom'
import Table from "react-bootstrap/Table";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

export function DisplayOrderSummary(order) {
  
  let name = order.name;
  let quantity = order.quantity;
  let price = order.price;

  function GetItemCost(qty, index, array) {
    return qty * price[index];
  }

  function GetTotalCost(total, itemCost, index, array) {
    return total + itemCost;
  }

  let itemCost = quantity.map(GetItemCost);
  let totalCost = itemCost.reduce(GetTotalCost);
  
  return (
    <Container>
      <Row><Col>
    <Table striped>
      <thead className="TableHeader">
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {quantity.filter(function(qty) {
          if (qty === 0) {
            return false;
          }
          return true;
        }).map(function(qty, index) {
          return (
            <tr key={index}>
              <td>{name[index]}</td>
              <td>{qty}</td>
              <td className="PriceText">{price[index]}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    </Col></Row>
    <Row>
      <Col md={8}><h5>Total</h5></Col>
      <Col md={4}><h5 className="PriceText">${totalCost}</h5></Col>
    </Row>
    </Container>
    )
}

const ViewConfirmation = () => {

  const location = useLocation();

  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <h1 className="text-center">Thanks for your order!</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert variant="success">
            <h4 className="text-center">Your confirmation number is {location.state.confirmationNumber}</h4>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="PageTitle TableAllignedPageHeader">Order Summary:</h3>
        </Col>
      </Row>
          {DisplayOrderSummary(location.state.order)}
      <Row>
        <Col className="text-center">Feel free to close this window.</Col>
      </Row>
    </Container>
    
  )
}

export default ViewConfirmation;