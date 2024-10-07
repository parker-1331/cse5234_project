import React from "react"
import { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function Contact() {

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
        </Container>
    );
}