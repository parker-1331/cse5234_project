import React from "react"
import { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Stack, Table } from 'react-bootstrap';

const ShippingEntry = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [shipping, setShipping] = useState({ userName: '', addr1: '', addr2: '', city: '', state: '', zip: '', });

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/purchase/viewOrder", { shipping: shipping, setShipping: setShipping });
    }

    return (
        <div>
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
        </div>
    );
}
export default ShippingEntry;