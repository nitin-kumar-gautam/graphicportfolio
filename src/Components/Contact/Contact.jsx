import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6f69c593-246b-46bd-9f74-5ba14eba0360");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <>
      <div className="contact">
        <div className="contact-title">
            <h1>Get in Touch</h1>
        </div>
        <div id='contact' className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Creative Graphic Designer & Video Editor focused on modern visuals and engaging digital content.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>nitin.rao.dev@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>+91-958-057-9931</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />Lucknow, UP <p></p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea type="message" placeholder='Enter your message' name='message' rows={8}></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Contact
