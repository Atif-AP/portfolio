import { useState } from 'react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100)
    };
  
    if (submitted) {
      return(
        <>
          <div>Thank you!</div>
          <div>I will be in touch!</div>
        </>
      )
    }
  
    return(
      <>
      <form action='' onSubmit={handleSubmit} method='post'>
        <label>Name</label>
        <input type='text' placeholder='Your Name' name='name' required></input>
        <label>E-mail</label>
        <input type='email' placeholder='Your Email' name='email' required></input>
        <label>Message</label>
        <textarea placeholder='Coding a Message...' name='message' required></textarea>
        <button type='submit'>Send Message</button>
  
      </form>
      </>
    )
}

export default Contact;