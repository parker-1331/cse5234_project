import React from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import style from './components/teststyles.scss';

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
            </p>
            <br></br>
            <b>Warranty Support</b>
            <p>
                If your product has a warranty, you can request assistance through our
                Customer Service Team by emailing cfa_cs@ceilingfanapp.com.
                <br></br>
                Please include your order number, the nature of the defect, and any relevant photos.
            </p>
            <hr></hr>
            <h2>Frequently Asked Questions (FAQ)</h2>
            <br></br>
            <b>1. How can I track my order?</b>
            <p>
                Once your order ships, you will receive a confirmation email with tracking details.
                You can also check your order status by logging into your account.
            </p>
            <br></br>
            <b>2. What do I do if my product is defective?</b>
            <p>
                If you receive a defective product, please contact our Returns Department at
                cfa_returns@ceilingfanapp.com with a photo of the issue and your order number, and
                we will assist you with a replacement or refund.
            </p>
            <br></br>
            <b>3. Can I cancel or modify my order after placing it?</b>
            <p>
                If your order has not yet shipped, you can modify or cancel it by contacting
                cfa_cs@ceilingfanapp.com. Once shipped, cancellations or modifications are not possible,
                but you can return the item after receiving it.
            </p>
            <br></br>
            <b>4. How long does it take to receive a refund?</b>
            <p>
                Refunds are processed within 5-7 business days once we receive your returned product. Please
                allow additional time for the refund to reflect on your payment method.
            </p>
            <br></br>
            <b>5. What payment methods do you accept?</b>
            <p>
                We accept major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay.
            </p>
            <br></br>
        </Container>
    );
}
export default Contact;