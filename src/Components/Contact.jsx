import React, { useState } from "react";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1jX6ecX22MdX2DPUvUvlilZ--uwFp8jvR/view?usp=sharing",
      "_blank"
    );
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact">Contact Me</h2>
      <div className="contact">
        <button onClick={handleDownloadResume}>Download Resume</button>
        <button onClick={toggleFormVisibility}>{showForm ? "Hide Form" : "Show Form"}</button>
      </div>
      {showForm && (
        <form className="contact-form" onSubmit={handleSubmitForm}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">
            Submit <h6>(does not work yet, use the mail icon in footer for now!)</h6>
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
