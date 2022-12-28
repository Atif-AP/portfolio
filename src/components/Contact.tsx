import React, { useRef } from 'react';
import styles from "./Contact.module.css"
import emailjs from '@emailjs/browser';
import {TEMPLATE_ID,SERVICE_ID,USER_ID} from "../config/config.js"

const Contact = () => {
    const form = useRef("");

    const sendEmail = (e: any) => {
        e.preventDefault();
    
        emailjs.sendForm( SERVICE_ID,TEMPLATE_ID, form.current, USER_ID)
          .then(
            result => console.log(result.text),
            error => console.log(error.text)
          )

          e.target.reset();
      };
  
    return(
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <label>Name</label>
        <input type='text' placeholder='Your Name' name='name' required></input>
        <label>E-mail</label>
        <input type='email' placeholder='Your Email' name='email' required></input>
        <label>Message</label>
        <textarea placeholder='Coding a Message...' name='message' rows={5}  required></textarea>
        <button type='submit'>Send Message</button>
      </form>
    );
}

export default Contact;