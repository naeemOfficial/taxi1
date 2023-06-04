import React, { useState } from "react";

const BookingModal = ({ closeModal }) => {
  const [activeTab, setActiveTab] = useState("contact");
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    destination: "",
    date: "",
    time: "",
    passengerName: "",
    passengerAge: "",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate form submission logic
    console.log("Submitting form...");
    console.log("Form Data:", formData);
    // Reset the form data
    setFormData({
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      destination: "",
      date: "",
      time: "",
      passengerName: "",
      passengerAge: "",
    });
    // Close the modal
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <ul className="tab-menu">
          <li
            className={`tab-item ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => handleTabChange("contact")}
          >
            Contact Details
          </li>
          <li
            className={`tab-item ${activeTab === "trip" ? "active" : ""}`}
            onClick={() => handleTabChange("trip")}
          >
            Trip Details
          </li>
          <li
            className={`tab-item ${activeTab === "passenger" ? "active" : ""}`}
            onClick={() => handleTabChange("passenger")}
          >
            Passenger Details
          </li>
        </ul>

        <div className="tab-content">
          {activeTab === "contact" && (
            <div>
              <h2>Contact Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailAddress">Email Address</label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    placeholder="Email Address"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="button" onClick={() => handleTabChange("trip")}>
                  Next
                </button>
              </form>
            </div>
          )}

          {activeTab === "trip" && (
            <div>
              <h2>Trip Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="destination">Destination</label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    placeholder="Destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder="Date"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    placeholder="Time"
                    value={formData.time}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleTabChange("passenger")}
                >
                  Next
                </button>
              </form>
            </div>
          )}

          {activeTab === "passenger" && (
            <div>
              <h2>Passenger Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="passengerName">Passenger Name</label>
                  <input
                    type="text"
                    id="passengerName"
                    name="passengerName"
                    placeholder="Passenger Name"
                    value={formData.passengerName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passengerAge">Passenger Age</label>
                  <input
                    type="text"
                    id="passengerAge"
                    name="passengerAge"
                    placeholder="Passenger Age"
                    value={formData.passengerAge}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
