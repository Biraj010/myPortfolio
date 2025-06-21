import React, { useState } from "react";

const Contact = ({ contact }) => {
  const { paragraph } = contact;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    // e.g., send the data to an API endpoint
    console.log(formData);
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 text-center animate-fade-in">
      <h2 className="text-4xl font-bold text-center mb-4">
        Get In <span className="text-accent">Touch</span>
      </h2>
      <p className="text-secondary max-w-2xl mx-auto mb-12">{paragraph}</p>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-surface border border-border rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-surface border border-border rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="bg-surface border border-border rounded-lg py-3 px-4 w-full mb-6 focus:outline-none focus:ring-2 focus:ring-accent"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-accent text-background font-bold py-3 px-8 rounded-lg hover:bg-accent/90 transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
