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
      <p>Email: itcreativeusa@gmail.com</p>
      <p>Phone: +415-231-8910</p>
      <h3>Contact Form</h3>
      <p>If you have any questions or inquiries, feel free to get in touch!</p>

      <form
        style={{ maxWidth: "400px", margin: "0 auto" }}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="nameInput">Your name</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="messageInput">Enter your message</label>
          <textarea
            className="form-control"
            id="messageInput"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            width: "100%",
            marginTop: "10px",
            backgroundColor: "magenta",
            borderColor: "magenta",
            boxShadow: "5px 5px #30D5C8",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
