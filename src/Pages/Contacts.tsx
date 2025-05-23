import { useState } from 'react';
import Styles from '../styles/Contact.module.css';
import { FaPhone, FaLocationDot } from 'react-icons/fa6';
import { TiMessages } from 'react-icons/ti';
import { MdContactMail } from 'react-icons/md';

export default function Contacts() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
  };
  return (
    <div className={Styles.contactSection}>

      <div className={Styles.contactSectionTitle}>
        <h1 >Contact</h1>
        <h3 >Have You Any Questions ?</h3>
      </div>
      <div className={Styles.contactSectionContent}>
        <div className={Styles.contactRight}>
          <form onSubmit={handleSubmit} className={Styles.form}>
            <div className={Styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={Styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={Styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className={Styles.submitBtn}>Send</button>
          </form>
        </div>


        <div className={Styles.contactLeft}>
          <div>
            <div className={Styles.contactInfo}>
              <a href="tel:+254798995763" className={Styles.icon}>
                <FaPhone className={Styles.i} />
              </a>
              <div className={Styles.info}>
                <h4>Call</h4>
                <p>+254798995763</p>
              </div>
            </div>
            <div className={Styles.contactInfo}>
              <a href="mailto:josephmwamuye5@gmail.com" className={Styles.icon}>
                <MdContactMail />
              </a>
              <div className={Styles.info}>
                <h4>Email</h4>
                <p>josephmwamuye5@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <div className={Styles.contactInfo}>
              <a href="https://wa.me/+254798995763?text=Hello" className={Styles.icon}>
                <TiMessages />
              </a>
              <div className={Styles.info}>
                <h4>Message</h4>
                <p>+25498995764</p>
              </div>
            </div>
            <div className={Styles.contactInfo}>
              <div className={Styles.icon}>
                <FaLocationDot />
              </div>
              <div className={Styles.info}>
                <h4>Location</h4>
                <p>Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}