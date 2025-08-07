import React, { useState } from "react";
import { sendEmail } from "../../api/email/email";
import ContactModal from "../modal/ContactModal";

const ContactFormSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("success");
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone || !comment) {
      setModalType("error");
      setModalTitle("Validation Error");
      setModalMessage("Please fill out all fields.");
      setShowModal(true);
      return;
    } else if (!isValidEmail(email)) {
      setModalType("error");
      setModalTitle("Invalid Email");
      setModalMessage("Please provide a valid email address.");
      setShowModal(true);
      return;
    }

    setIsLoading(true);

    try {
      const emailData = {
        firstName,
        lastName,
        email,
        phone,
        message: comment,
      };

      const response = await sendEmail(emailData);

      if (response) {
        setModalType("success");
        setModalTitle("Success");
        setModalMessage("Message sent successfully!");
        setShowModal(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setphone("");
        setComment("");
      }
    } catch (error) {
      setModalType("error");
      setModalTitle("Error");
      setModalMessage("Failed to send message. Please try again.");
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <form action="#" onSubmit={handleFormSubmit}>
        <div className="row g-xl-4 g-3">
          <div className="col-6 col-xxs-12">
            <input
              type="text"
              name="commenter-first-name"
              id="commenter-first-name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col-6 col-xxs-12">
            <input
              type="text"
              name="commenter-last-name"
              id="commenter-last-name"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="col-6 col-xxs-12">
            <input
              type="email"
              name="commenter-email"
              id="commenter-email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-6 col-xxs-12">
            <input
              type="number"
              name="commenter-number"
              id="commenter-number"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
          <div className="col-12">
            <textarea
              name="commenter-comment"
              id="commenter-comment"
              placeholder="Your Message"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="fz-1-banner-btn fz-comment-form__btn"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <ContactModal
        show={showModal}
        setShow={setShowModal}
        type={modalType}
        title={modalTitle}
        message={modalMessage}
      />
    </>
  );
};

export default ContactFormSection;
