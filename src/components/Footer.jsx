import styles from './Footer.module.css';

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logoMark}>S</span>
          <span className={styles.brandName}>Saywish Software Solutions</span>
        </div>

        <nav className={styles.links} aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className={styles.copy}>
          &copy; {year} Saywish Software Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
