import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacts = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "b20c012e-8d15-4f5f-85b6-2e6c2022aa74");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error("Error");
    }
  };

  return (
    <div className="container py-5" id="contacts">
      <h1 className="text-center mb-5">Contacts</h1>
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6 mb-4">
          <h2>Let's Talk...</h2>
          <p>
            Say hi to me from this form or message me on Gmail, WhatsApp, or LinkedIn.
            Below is my Resume/CV. You can download it by clicking the button.
          </p>
          <div className="d-flex align-items-center gap-3 my-3">
            <h5 className="mb-0">Click here</h5>
            <a href="/Ujjwal_Resume.pdf" download="Ujjwal_Resume.pdf">
              <button className="btn btn-primary">Resume/CV</button>
            </a>
          </div>
          <div className="d-flex gap-4 fs-3 mt-4">
            <a href="https://www.instagram.com/ujjwal_john.18/" className="text-dark"><i className="fab fa-instagram"></i></a>
            <a href="mailto:ujjwaljohn395@gmail.com" className="text-dark"><i className="fab fa-google"></i></a>
            <a href="https://www.linkedin.com/in/ujjwal-john/" className="text-dark"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/Ujjwal-John" className="text-dark"><i className="fab fa-github"></i></a>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="col-md-6">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" name="name" required placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" name="email" required placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" name="subject" required placeholder="Subject" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" name="message" rows="5" required placeholder="Message"></textarea>
            </div>
            <button type="submit" className="btn btn-success">Send</button>
            <div className="mt-2 text-muted">{result}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
