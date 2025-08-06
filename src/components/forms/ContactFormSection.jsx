import React, { useState } from "react";
import { toast } from "react-toastify";
import { sendEmail } from "../../api/email/email";

const ContactFormSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone || !comment) {
      toast.error("Please fill out all fields.", { position: "top-right" });
      return;
    } else if (!isValidEmail(email)) {
      toast.warning("Please provide a valid email address.", {
        position: "top-right",
      });
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
        toast.success("Message sent successfully!", { position: "top-right" });
        setFirstName("");
        setLastName("");
        setEmail("");
        setphone("");
        setComment("");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
      });
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
  );
};

export default ContactFormSection;
