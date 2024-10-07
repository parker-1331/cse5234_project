import React from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Contact = () => {

    return (
        <Container>
            <br></br>
            <h1>Contact Us</h1>
            <br></br>
            <b>Need help? We're here for you!</b>
            <p>
                If you have any issues, questions, or concerns regarding 
                your purchase, feel free to contact us. Our team is dedicated 
                to providing the best support to ensure your satisfaction.
            </p>
            <hr></hr>
            <h2>How to Reach Us</h2>
            <b>Customer Support Email</b>
            <p>
                cfa_cs@ceilingfanapp.com
                <br></br>
                For general inquiries, product questions, and troubleshooting.
                Response time: within 24-48 hours.
            </p>
            <br></br>
            <b>Returns Department Email</b>
            <p>
                cfa_returns@ceilingfanapp.com
                <br></br>
                For any issues with your product, to initiate a return or exchange.
                Be sure to include your order number and details about the issue.
            </p>
            <br></br>
            <b>Phone Support</b>
            <p>
                1-800-123-4567 (Monday – Friday, 9 AM – 6 PM ET)
                <br></br>
                Speak directly with a member of our support team for immediate assistance.
            </p>
        </Container>
    );
}
export default Contact;