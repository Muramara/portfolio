import { useState } from 'react'
import emailjs from 'emailjs-com';

export default function ContactPopup(props) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_57kh6wf';
    const templateID = 'template_zz7635r';
    const publicKey = 'eR0F6Qb-mfTPoXpdI';

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
    <section className='project-popup'>
      <div class="container col-xl-10 col-xxl-8 px-4 py-0 popup-form">
        <div class="row align-items-center g-lg-5 py-0">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Get In Touch</h1>
            <p class="col-lg-10 fs-4">Provide your name, email and any message you would like to get to me and I will be sure to get back to you.</p>
            <button
                class="btn btn-secondary rounded-pill px-3"
                onClick={(event) => {
                    event.preventDefault();
                    props.onClose(false);
                    props.onClear();
                }}>Close Form
            </button>
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
