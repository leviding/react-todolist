import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    };
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleBtnClick.bind(this)}>Add</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <TodoItem delete={this.handleDelete.bind(this)} key={index} index={index} content={item}/>
            })
          }
        </ul>
      </div>
    );
  }

}



export default TodoList;
