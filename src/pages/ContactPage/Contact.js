import React from "react";
import Heading from "../../common/Heading";

export default function Contact() {
  return (
    <div className="contact-page">
      

      <section className="contact-info">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>
            We’d love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out to us using the contact form below or through the following methods:
          </p>
          <ul>
            <li><strong>Email:</strong> info@nexgengood.com</li>
            <li><strong>Phone:</strong> (123) 456-7890</li>
            <li><strong>Address:</strong> 624 N WALNUT ST GARDNER , KS 66030</li>
          </ul>
        </div>
      </section>

      <section className="contact-form">
        <div className="container">
          <h2>Contact Form</h2>
          <form action="/submit" method="post">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <section className="map">
        <div className="container">
          <h2>Our Location</h2>
          <div className="map-container">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.563121415339!2d-122.39654808468159!3d37.78823297975907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e27e35f3d%3A0x548e4f24559c3026!2s123%20Next%20Gen%20Street%2C%20Tech%20City%2C%20TX%2012345!5e0!3m2!1sen!2sus!4v1632152360807!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          font-family: Arial, sans-serif;
          color: #333;
          padding: 20px;
        }

        .text-center {
          margin-bottom: 40px;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        section {
          margin-bottom: 40px;
        }

        h2 {
          font-size: 1.5rem;
          color: #222;
        }

        p {
          font-size: 1rem;
          line-height: 1.6;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          margin-bottom: 10px;
        }

        .contact-form {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #005bb5;
        }

        .map-container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%;
        }

        .map-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
