import styles from "../styles/style.module.scss";

function Item(props) {
  return (
    <form className={styles.item}>
      <input className={styles.radioBox} type="checkbox" onChange={() => props.checkboxCheck()} />
      <label className={styles.label}>{props.item.text}</label>
      <button className={styles.btnUp} type="button" onClick={() => props.updateTask(props.item.id)}>Update</button>
      <button className={styles.btnDel} type="button" onClick={() => props.deleteTask(props.item.id)}>Delete</button>
    </form>
  );
}

export default Item;
