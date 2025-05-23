import { useRef, useState } from 'react';
import Styles from '../styles/Contact.module.css';
import { FaPhone, FaLocationDot } from 'react-icons/fa6';
import { TiMessages } from 'react-icons/ti';
import { MdContactMail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

export default function Contacts() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    time: '',
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm((prev) => {
      const updatedForm = { ...prev, time: new Date().toISOString() };
      // After state update, send the form
      setTimeout(() => {
        emailjs
          .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current!,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
          .then(
            () => {
              setForm({ name: '', email: '', message: '', time: '' });
              alert('Message sent successfully!');
            },
            () => {
              alert('Failed to send message, please try again.');
            }
          );
      }, 0);
      return updatedForm;
    });
  };
  return (
    <div className={Styles.contactSection}>

      <div className={Styles.contactSectionTitle}>
        <h1 >Contact</h1>
        <h3 >Have You Any Questions ?</h3>
      </div>
      <div className={Styles.contactSectionContent}>
        <div className={Styles.contactRight}>
          <form ref={formRef} onSubmit={handleSubmit} className={Styles.form}>
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
            {/* Hidden timestamp field */}
            <input
              type="hidden"
              name="timestamp"
              value={form.time}
            />
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