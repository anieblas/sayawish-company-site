import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Storage &amp; Filesystem Experts</p>
          <h1 className={styles.headline}>
            Powerful Storage Solutions<br />
            <span className={styles.accent}>Built for the Future</span>
          </h1>
          <p className={styles.subheadline}>
            Saywish Software Solutions designs and delivers high-performance
            storage management and filesystem software that scales with your
            business—from startups to enterprises.
          </p>
          <div className={styles.actions}>
            <a href="#services" className="btn btn-primary">Explore Services</a>
            <a href="#contact" className="btn btn-outline">Talk to Us</a>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.diagram}>
            <div className={`${styles.disk} ${styles.disk1}`}>
              <span>NVMe</span>
            </div>
            <div className={`${styles.disk} ${styles.disk2}`}>
              <span>SSD</span>
            </div>
            <div className={`${styles.disk} ${styles.disk3}`}>
              <span>HDD</span>
            </div>
            <div className={styles.connector} />
            <div className={styles.server}>
              <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="72" height="16" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                <circle cx="14" cy="12" r="4" fill="#1e90ff"/>
                <rect x="24" y="9" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.25)"/>
                <rect x="4" y="26" width="72" height="16" rx="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                <circle cx="14" cy="34" r="4" fill="#34d399"/>
                <rect x="24" y="31" width="32" height="3" rx="1.5" fill="rgba(255,255,255,0.2)"/>
                <rect x="4" y="48" width="72" height="10" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                <rect x="8" y="51" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.15)"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--color-bg)"/>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
