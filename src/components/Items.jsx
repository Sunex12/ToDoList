import styles from "../styles/style.module.scss";
import Item from "./Item";

function showTasks(props) {
  return (
    <div>
      {props.items.map((el) => (
        <Item
          key={el.id}
          item={el}
          deleteTask={props.deleteTask}
          checkboxCheck={props.checkboxCheck}
          updateTask={props.updateTask}
        />
      ))}
    </div>
  );
}

function showNoTasks() {
  return <h2 className={styles.noTasks}>Add a new task</h2>;
}

function Items(props) {
  return (
    <div className={styles.items}>
      {props.items.length > 0 ? showTasks(props) : showNoTasks()}
    </div>
  );
}

export default Items;
