import React, { useState } from "react";
//Contact me component with contact form and contact info
const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //Function to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //If name, email, or message is empty, alert user to fill out the form
    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    if (email.trim() === "" || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (message.trim() === "") {
      alert("Please enter your message.");
      return;
    }

    console.log("Form submitted!");
  };
  //Return contact me component with contact form and contact info
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Contact Me</h2>
      <p>If you have any questions or inquiries, feel free to get in touch!</p>
      <p>
        Email:
        <a href="mailto:itcreativeusa@gmail.com"> itcreativeusa@gmail.com</a>
      </p>
      <p>
        Github:{" "}
        <a href="https://github.com/itcreativeusa">
          {" "}
          https://github.com/itcreativeusa
        </a>
      </p>
      <p>
        LinkedIn:
        <a href="https://www.linkedin.com/in/itcreativeusa/">
          https://www.linkedin.com/in/itcreativeusa/
        </a>
      </p>
      <p>Phone: +1 415-231-8910</p>
    </div>
  );
};

export default ContactMe;
