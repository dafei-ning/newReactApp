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

  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // Dont do this: this.state.persons[0].name = 'Geralt'; 识别不出
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Jennifer", age: 28 },
        { name: "JavaScript", age: 28 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi This is a Demo!</h1> 
        <button onClick={() => this.switchNameHandler('nui2')}>Swtich Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click ={this.switchNameHandler.bind(this, 'hui')}
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
