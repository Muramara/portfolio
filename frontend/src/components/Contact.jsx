import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:1300/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
  
      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <section>
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Get In Touch</h1>
            <p class="col-lg-10 fs-4">Provide your name, email and any message you would like to get to me and I will be sure to get back to you.</p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
              <div class="form-floating mb-3">
                <input name="name" type="text" class="form-control" id="floatingInput" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input name="email" type="email" class="form-control" id="floatingInput" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <textarea name="message" class="message-textarea" placeholder="Leave a message here" id="floatingTextarea2" value={formData.message} onChange={handleChange} required></textarea>
                {/* <label for="floatingTextarea2">Message</label> */}
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">Send</button>
              <hr class="my-4"/>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
