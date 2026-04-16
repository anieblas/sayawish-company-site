import styles from './Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.messageBox}>
          <h2 className="section-title" style={{ color: '#fff' }}>Contact Us</h2>
          <p className={styles.message}>
            For any inquiries, please reach us at{' '}
            <a href="mailto:contact@saywish.com" className={styles.emailLink}>
              contact@saywish.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
