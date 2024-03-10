import styles from "../styles/style.module.scss";

function Input(props) {
return (
    <form className={styles.input}>
      <input className={styles.textArea} type="text" placeholder="Add new list item" maxLength={25} />
      <button className={styles.addBtn} type="button" onClick={() => props.addTask()} >
        {props.upButton ? 'Add' : 'Update'}
      </button>
    </form>
  )
}

export default Input