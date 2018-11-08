import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Person from "./Components/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Jack", age: 28 },
      { name: "Echo", age: 28 },
      { name: "Java", age: 28 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = () => {
    // console.log('was clicked!');
    // Dont do this: this.state.persons[0].name = 'Geralt';
    this.setState({
      persons: [
        { name: "Geralt", age: 28 },
        { name: "Jennifer", age: 28 },
        { name: "JavaScript", age: 28 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi This is a Demo!</h1>
        <button onClick={this.switchNameHandler}>Swtich Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobbie is eat bianbian.
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is BaobaoHui!'));
  }
}

export default App;
