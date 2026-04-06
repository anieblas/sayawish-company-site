import { useState } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo}>
          <span className={styles.logoMark}>S</span>
          <span>Saywish <span className={styles.logoAccent}>Software</span></span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className={`btn btn-primary ${styles.navCta}`} onClick={() => setMenuOpen(false)}>
            Get in Touch
          </a>
        </nav>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barX1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barHide : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barX2 : ''}`} />
        </button>
      </div>
    </header>
  );
}

export default Header;
