import React, { useState } from "react";

const DonateInstructions = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log({ donationAmount, donorName, donorEmail });
  };

  return (
    <div className="container">
      <h2>Donation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="donationAmount">Donation Amount</label>
          <input
            type="number"
            className="form-control"
            id="donationAmount"
            placeholder="Enter amount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="donorName">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="donorName"
            placeholder="Enter your name"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="donorEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="donorEmail"
            placeholder="Enter your email"
            value={donorEmail}
            onChange={(e) => setDonorEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Donate
        </button>
      </form>
    </div>
  );
};

export default DonateInstructions;
