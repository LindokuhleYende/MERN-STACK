import React from "react";
import { Button } from "react-bootstrap";
import "../styles/contact.css"


function Contact() {

    const contact = (event) => {
        event.preventDefault(); // Prevents the page from refreshing
        const name = document.querySelector('input[name="name"]').value;
        alert(`Hello, ${name}!`);
    };

    return (
        <div className="contact-container">
            <h2>
                Contact Form
            </h2>
            <form>
                <label>Email:</label>
                <br />
                <input type="text" id="Email" name="email" />
                <br />
                <label>Fullname:</label>
                <br />
                <input type="text" name="name" />
                <br />
                <br />
                <Button onClick={contact}>Submit</Button>
            </form>
        </div>
    )
}

export default Contact