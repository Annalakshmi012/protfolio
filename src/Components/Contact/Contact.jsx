import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "55887c05-73cf-43d9-b398-f518b17a2438");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

 
  return (
    <div id='contact' className="contact">
<div className="contact-title">
  <h1>Get in touch</h1>
  <img src={theme_pattern} alt="" />
</div>
<div className="contact-section">
  <div className="contact-left">
    <h1>Let's talk</h1>
    <p>I'm always excited to connect, collaborate, or discuss new opportunities. Whether you have a question, project idea, or just want to say hi, feel free to reach out I'd love to hear from you!
</p>
<div className="contact-details">
  <div className="contact-detail">
    <img src={mail_icon} alt="" />
    <p>annalakshmi.d21@gmail.com</p>
  </div>
  <div className="contact-detail">
    <img src={call_icon} alt="" />
    <p>+91 8754917748</p>
  </div>
  <div className="contact-detail">
    <img src={location_icon} alt="" />
    <p>Thoothukudi, Tamil Nadu</p>
  </div>
</div>
  </div>
  <form onSubmit={onSubmit}className="contact-right">
    <label htmlFor="">Your Name</label>
    <input type="text" placeholder="Enter you name" name="name"/>
    <label htmlFor="">Your Email</label>
    <input type="email" placeholder='Enter your email' name='email' />
    <label htmlFor="">Write your message here</label>
    <textarea name="message" placeholder='Enter your message'  rows="8"></textarea>
 <button type='submit' className="contact-submit">Submit</button>
  </form>
</div>

    </div>
  )
}

export default Contact