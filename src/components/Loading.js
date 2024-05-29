import styles from '../loading.module.css';
const Loading = () => (
  <>
    <ul>
      {[...Array(10)].map((_, idx) => (
        <li key={idx} className={styles.li}></li>
      ))}
    </ul>
  </>
);

export default Loading;
