import styles from './App.module.css';

function App() {
  return (
    <div className={styles.page}>
      <p className={styles.message}>
        For any inquiries, please contact us at{' '}
        <a href="mailto:contact@saywish.com">contact@saywish.com</a>
      </p>
    </div>
  );
}

export default App;
