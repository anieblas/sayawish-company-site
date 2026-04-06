import styles from './Services.module.css';

const services = [
  {
    icon: '🗄️',
    title: 'Distributed Object Storage',
    description:
      'Infinitely scalable object storage compatible with S3 APIs. Designed for petabyte-scale data lakes, backups, and media workflows with built-in redundancy.',
  },
  {
    icon: '📂',
    title: 'High-Performance Filesystems',
    description:
      'Parallel and clustered filesystems that deliver low-latency, high-throughput access for demanding workloads—HPC, AI/ML training, financial analytics, and more.',
  },
  {
    icon: '☁️',
    title: 'Hybrid Cloud Storage',
    description:
      'Seamlessly tier data between on-premises infrastructure and major cloud providers. Reduce costs while maintaining full control over data locality and compliance.',
  },
  {
    icon: '🔒',
    title: 'Data Protection & Recovery',
    description:
      'End-to-end encryption, immutable snapshots, and automated disaster-recovery pipelines that keep your data safe and your RTO/RPO targets met.',
  },
  {
    icon: '📊',
    title: 'Storage Analytics',
    description:
      'Real-time dashboards and capacity-planning tools that surface usage trends, detect anomalies, and help you optimise storage spend across your fleet.',
  },
  {
    icon: '🔧',
    title: 'Managed & Professional Services',
    description:
      'From architecture reviews and migration planning to 24/7 managed operations, our experts are your dedicated storage team whenever you need them.',
  },
];

function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive storage and filesystem solutions for every stage of your data journey.
        </p>

        <div className={styles.grid}>
          {services.map((svc) => (
            <div key={svc.title} className={styles.card}>
              <div className={styles.iconWrap} aria-hidden="true">
                {svc.icon}
              </div>
              <h3 className={styles.cardTitle}>{svc.title}</h3>
              <p className={styles.cardDesc}>{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
