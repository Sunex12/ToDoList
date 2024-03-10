import React, { Component } from "react";
import styles from "../styles/style.module.scss";
import Title from "../components/Title";
import Input from "../components/Input";
import Items from "../components/Items";
import Footer from "../components/Footer";

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      count: 0,
      upButton: true,
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.clearAllTasks = this.clearAllTasks.bind(this);
    this.checkboxCheck = this.checkboxCheck.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }
  render() {
    return (
      <div className="container">
        <div className={styles.inner}>
          <Title />
          <Input addTask={this.addTask} upButton={this.state.upButton} />
          <Items
            checkboxCheck={this.checkboxCheck}
            items={this.state.items}
            deleteTask={this.deleteTask}
            updateTask={this.updateTask}
          />
          <Footer clearAllTasks={this.clearAllTasks} count={this.state.count} />
        </div>
      </div>
    );
  }

  addTask() {
    let input = document.querySelector("input");
    const newObject = {
      id:
        this.state.items.length > 0
          ? this.state.items[this.state.items.length - 1].id + 1
          : 0,
      text: input.value,
    };
    if (this.state.items.length < 5) {
      input.value === ""
        ? this.setState({ items: [...this.state.items] })
        : this.setState({ items: [...this.state.items, newObject] });
      input.value = "";
      if (!this.state.upButton) {
        this.setState({ upButton: !this.state.upButton });
      }
    }
  }

  deleteTask(id) {
    this.setState(
      { items: this.state.items.filter((el) => el.id !== id) },
      () => {
        let checkedCheckboxes = document.querySelectorAll(
          'input[type="checkbox"]:checked'
        );
        this.setState({ count: checkedCheckboxes.length });
      }
    );
  }

  clearAllTasks() {
    this.setState({ items: [] });
    this.setState({ count: 0 });
  }

  checkboxCheck() {
    let checkedCheckboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    this.setState({ count: checkedCheckboxes.length });
  }

  updateTask(id) {
    let input = document.querySelector("input");
    let upTask = this.state.items.filter((el) => el.id === id);

    input.value = upTask[0].text;
    this.setState({ upButton: !this.state.upButton });
    this.setState(
      { items: this.state.items.filter((el) => el.id !== id) },
      () => {
        let checkedCheckboxes = document.querySelectorAll(
          'input[type="checkbox"]:checked'
        );
        this.setState({ count: checkedCheckboxes.length });
      }
    );
  }
}

export default Index;
