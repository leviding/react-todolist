import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
  }

  handleBtnClick = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleDelete = (index) => {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            delete={this.handleDelete}
            key={index}
            content={item}
            index={index}
          />
        );
      })
    );
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button className='btn' onClick={this.handleBtnClick}>Add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    );
  }

}



export default TodoList;
