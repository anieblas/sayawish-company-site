import styles from './About.module.css';

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '200+', label: 'Clients Worldwide' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '50 PB+', label: 'Data Managed' },
];

function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.textCol}>
            <h2 className="section-title">About Us</h2>
            <p className="section-subtitle">Who we are and what drives us</p>
            <p className={styles.body}>
              <strong>Saywish Software Solutions</strong> is a technology company
              specialising in enterprise-grade storage management and filesystem
              software. Founded with a mission to make data infrastructure
              simpler, faster, and more reliable, we help organisations manage
              their most critical asset—their data—with confidence.
            </p>
            <p className={styles.body}>
              Our team of storage engineers and systems architects brings
              decades of combined experience across distributed filesystems,
              object storage, block storage, and cloud-native data platforms.
              Whether you need on-premises deployments, hybrid cloud integration,
              or fully managed solutions, we deliver software that works at
              scale.
            </p>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              Learn More
            </a>
          </div>

          <div className={styles.statsCol}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
