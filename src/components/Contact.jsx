import { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  }

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) {
      setErrors(e2);
      return;
    }
    setSubmitted(true);
  }

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <h2 className="section-title" style={{ color: '#fff' }}>Get in Touch</h2>
            <p className={styles.intro}>
              Have a question, need a quote, or just want to talk storage?
              We&rsquo;d love to hear from you. Fill in the form or reach us
              directly using the details below.
            </p>

            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon}>📧</span>
                <span>info@saywishsoftware.com</span>
              </li>
              <li>
                <span className={styles.contactIcon}>📞</span>
                <span>+1 (800) 729-9474</span>
              </li>
              <li>
                <span className={styles.contactIcon}>📍</span>
                <span>123 Data Drive, Silicon Valley, CA 94025</span>
              </li>
              <li>
                <span className={styles.contactIcon}>⏰</span>
                <span>Mon – Fri, 9 AM – 6 PM PST</span>
              </li>
            </ul>
          </div>

          <div className={styles.formCol}>
            {submitted ? (
              <div className={styles.successBox}>
                <span className={styles.successIcon}>✅</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We&rsquo;ll get back to you within one business day.</p>
                <button
                  className="btn btn-primary"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="name">Name <span aria-hidden="true">*</span></label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={handleChange}
                      aria-describedby={errors.name ? 'name-err' : undefined}
                      className={errors.name ? styles.inputError : ''}
                    />
                    {errors.name && <span id="name-err" className={styles.error}>{errors.name}</span>}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                      aria-describedby={errors.email ? 'email-err' : undefined}
                      className={errors.email ? styles.inputError : ''}
                    />
                    {errors.email && <span id="email-err" className={styles.error}>{errors.email}</span>}
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your storage needs…"
                    value={form.message}
                    onChange={handleChange}
                    aria-describedby={errors.message ? 'message-err' : undefined}
                    className={errors.message ? styles.inputError : ''}
                  />
                  {errors.message && <span id="message-err" className={styles.error}>{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
