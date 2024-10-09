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
            <br></br>
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
                1-800-123-4567 (Monday - Friday, 9 AM - 6 PM ET)
                <br></br>
                Speak directly with a member of our support team for immediate assistance.
            </p>
            <hr></hr>
            <h2>Support & Return Policies</h2>
            <br></br>
            <b>30-Day Return policy</b>
            <p>
                We accept returns within 30 days of purchase. Products must be in
                their original packaging, unused, and with proof of purchase. Refunds
                will be processed within 5-7 business days after receiving the returned
                item.
                <br></br>
                Please refer to our Returns & Refunds Policy for more information.
            </p>
            <br></br>
            <b>Warranty Support</b>
            <p>
                If your product has a warranty, you can request assistance through our
                Warranty Support Team by emailing warranty@yourcompany.com.
                <br></br>
                Please include your order number, the nature of the defect, and any relevant photos.
            </p>
        </Container>
    );
}
export default Contact;