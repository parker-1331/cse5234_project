import React from "react";
import {useLocation} from 'react-router-dom'
import Table from "react-bootstrap/Table";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
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

const ViewConfirmation = () => {

  const location = useLocation();

  const red = {backgroundColor: "red", width: "100%", textAlign: "center"};

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
          <h3>Order Summary:</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          {DisplayOrderSummary(location.state.order)}
        </Col>
      </Row>
    </Container>
    
  )
}

export default ViewConfirmation;