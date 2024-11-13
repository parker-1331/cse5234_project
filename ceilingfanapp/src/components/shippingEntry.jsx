import React from "react"
import { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import {Container, Form, Button} from 'react-bootstrap';

const ShippingEntry = () => {

    const location = useLocation();
    const [shipping, setShipping] = useState({ userName: '', addr1: '', addr2: '', city: '', state: '', zip: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/purchase/viewOrder", { state: { shipping: shipping, payment: location.state.payment, order: location.state.order}});

        console.log("Name of Customer: ", shipping.userName);
        console.log("Address Line 1: ", shipping.addr1);
        console.log("Address Line 2: ", shipping.addr2);
        console.log("City: ", shipping.city);
        console.log("State: ", shipping.state);
        console.log("Zip: ", shipping.zip);
    }

    return (
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nameOfCust">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text"
                required
                onChange={(e) =>
                  setShipping({ ...shipping, userName: e.target.value })
                }
              />
            </Form.Group>
                
            <Form.Group controlId="addr1">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control 
                type="text"
                required
                onChange={(e) =>
                  setShipping({ ...shipping, addr1: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="addr2">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control 
                type="text"
                onChange={(e) =>
                  setShipping({ ...shipping, addr2: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control 
                type="text"
                required
                onChange={(e) =>
                  setShipping({ ...shipping, city: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control 
                type="text"
                required
                minLength="2"
                maxLength="2"
                onChange={(e) =>
                  setShipping({ ...shipping, state: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="zip">
              <Form.Label>ZIP Code</Form.Label>
              <Form.Control 
                type="text"
                required
                minLength="5"
                maxLength="5"
                onChange={(e) =>
                  setShipping({ ...shipping, zip: e.target.value })
                }
              />
              <Form.Control.Feedback>ZIP Code must be 5 digits.</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">To Confirmation</Button>

          </Form>
        </Container>
    );

    /* <div>
            <form onSubmit={handleSubmit}>
                <h1>Shipping</h1>
                <br></br>
                <p>Name</p>
                <input
                    name="nameOfCust"
                    type="text"
                    required  
                    onChange={(e) =>
                        setShipping({ ...shipping, userName: e.target.value })
                    }
                />
                <br></br><br></br>
                <p>Address Line 1</p>
                <input
                    name="addr1"
                    type="text"
                    required
                    onChange={(e) =>
                        setShipping({ ...shipping, addr1: e.target.value })
                    }
                />
                <br></br><br></br>
                <p>Address Line 2 (optional)</p>
                <input
                    name="addr2"
                    type="text"
                    onChange={(e) =>
                        setShipping({ ...shipping, addr2: e.target.value })
                    }
                />
                <br></br><br></br>
                <p>City</p>
                <input
                    name="city"
                    type="text"
                    required
                    onChange={(e) =>
                        setShipping({ ...shipping, city: e.target.value })
                    }
                />
                <br></br><br></br>
                <p>State</p>
                <input
                    name="state"
                    type="text"
                    required
                    minLength="2"
                    maxLength="2"
                    onChange={(e) =>
                        setShipping({ ...shipping, state: e.target.value })
                    }
                />
                <br></br><br></br>
                <p>Zip</p>
                <input
                    name="zip"
                    type="text"
                    required
                    minLength="5"
                    maxLength="5"
                    onChange={(e) =>
                        setShipping({ ...shipping, zip: e.target.value })
                    }
                />
                <br></br><br></br>
                <button type="submit">To Confirmation</button>
            </form>
        </div> */
}
export default ShippingEntry;