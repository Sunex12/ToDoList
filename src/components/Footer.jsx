import styles from "../styles/style.module.scss";

function Footer(props) {
  return (
    <footer className={styles.footer}>
      <p className={styles.count}>
          {props.count} item selected
        </p>
      <p className={styles.clearAll} onClick={() => props.clearAllTasks()}>
        Clear All
      </p>
    </footer>
  );
}

export default Footer;
