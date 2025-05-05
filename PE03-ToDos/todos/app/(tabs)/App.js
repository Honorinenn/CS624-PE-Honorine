import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All' // Filter type: All | Complete | Active
    };
  }

  inputChange = (inputValue) => {
    this.setState({ inputValue });
  };

  submitTodo = () => {
    const { inputValue, todos } = this.state;
    if (inputValue.trim() === '') return;

    const todo = {
      title: inputValue,
      key: Date.now().toString(),
      todoIndex: todos.length,
      complete: false
    };

    const updatedTodos = [...todos, todo];

    this.setState({
      todos: updatedTodos,
      inputValue: ''
    });
  };

  toggleComplete = (todoIndex) => {
    const todos = this.state.todos.map(todo =>
      todo.todoIndex === todoIndex
        ? { ...todo, complete: !todo.complete }
        : todo
    );
    this.setState({ todos });
  };

  deleteTodo = (todoIndex) => {
    const todos = this.state.todos.filter(todo => todo.todoIndex !== todoIndex);
    this.setState({ todos });
  };

  setType = (type) => {
    this.setState({ type });
  };

  filterTodos = () => {
    const { todos, type } = this.state;
    switch (type) {
      case 'Complete':
        return todos.filter(todo => todo.complete);
      case 'Active':
        return todos.filter(todo => !todo.complete);
      default:
        return todos;
    }
  };

  render() {
    const { inputValue, type } = this.state;
    const filteredTodos = this.filterTodos();

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <Heading />
          <Input inputValue={inputValue} inputChange={this.inputChange} />
          <TodoList
            todos={filteredTodos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />
          <View style={styles.buttonWrapper}>
            <Button title="Submit" onPress={this.submitTodo} />
          </View>
        </ScrollView>

        {/* Tab Bar Filter */}
        <View style={styles.tabBar}>
          {['All', 'Active', 'Complete'].map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.tabItem,
                type === filter && styles.activeTab
              ]}
              onPress={() => this.setType(filter)}
            >
              <Text style={styles.tabText}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10
  },
  tabItem: {
    padding: 10,
    borderRadius: 5
  },
  activeTab: {
    backgroundColor: '#dcdcdc'
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500'
  }
});

export default App;
