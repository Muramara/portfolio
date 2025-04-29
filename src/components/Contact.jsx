import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.process.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.process.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.process.env.VITE_PUBLIC_KEY;

    emailjs.send(serviceID, templateID, {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Something went wrong.');
      });
  };

  return (
    <section>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Get In Touch</h1>
            <p className="col-lg-10 fs-4">Provide your name, email and any message you would like to get to me and I will be sure to get back to you.</p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="floatingInputName"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="floatingInputName">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="floatingInputEmail"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="floatingInputEmail">Email address</label>
              </div>
              <div className="form-floating">
                <textarea
                  name="message"
                  className="form-control"
                  id="floatingTextarea2"
                  style={{ height: '100px' }}
                  placeholder="Leave a message here"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="floatingTextarea2">Message</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Send</button>
              <hr className="my-4" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
