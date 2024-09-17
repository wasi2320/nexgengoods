import React from "react";
import Heading from "../../common/Heading";

export default function AboutPage() {
  return (
    <div className="about-page">
      

      <section className="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            At Next Gen, our mission is to provide a seamless and innovative shopping experience that brings the latest trends and cutting-edge technology directly to your doorstep. We are dedicated to offering a wide range of high-quality products, from stylish clothes and the latest electronics to fashionable shoes and more.
          </p>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Customer Satisfaction:</strong> We prioritize our customers and strive to exceed their expectations with every purchase. We have been in the business for <strong>3 years</strong>, continuously improving our services and products to ensure our customers are always satisfied.</li>
            <li><strong>Innovation:</strong> We stay ahead of trends to ensure we offer the most current and high-quality products.</li>
            <li><strong>Integrity:</strong> We conduct our business with honesty and transparency, building trust with every transaction.</li>
            <li><strong>Sustainability:</strong> We are committed to sustainable practices that contribute positively to the environment.</li>
          </ul>
        </div>
      </section>

      <section className="what-sets-us-apart">
        <div className="container">
          <h2>What Sets Us Apart</h2>
          <p>
            Next Gen stands out by combining a diverse product selection with exceptional customer service. Our team is passionate about curating products that meet high standards of quality and style. We have been satisfying our customers for <strong>3 years</strong> by offering a user-friendly online shopping experience, with fast shipping and easy returns to ensure your satisfaction.
          </p>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>
            We love hearing from our customers! If you have any questions, suggestions, or need assistance, please feel free to <a href="/contact">contact us</a>. Our dedicated support team is here to help you with any inquiries or feedback.
          </p>
        </div>
      </section>

      <style jsx>{`
        .about-page {
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
          font-size: 2rem;
          color: #222;
        }

        p {
          font-size: 1rem;
          line-height: 1.6;
        }

        ul {
          list-style-type: disc;
          padding-left: 20px;
        }

        li {
          margin-bottom: 10px;
        }

        a {
          color: #0070f3;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        strong {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
