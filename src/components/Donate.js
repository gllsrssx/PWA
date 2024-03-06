import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

export function Donate() {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (amount <= 0) {
      setError("Donation amount must be greater than zero");
    } else {
      setError("");
      alert(`Thank you for your donation of ${amount}!`);
    }
  };

  return (
    <Container>
      <h1>Donate</h1>
      <p>
        Thank you for considering a donation! Please enter the amount below to
        proceed.
      </p>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicAmount">
          <Form.Label>
            <p>Donation Amount:</p>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min={0}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
