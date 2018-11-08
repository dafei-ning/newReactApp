import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Person from "./Components/Person";

class App extends Component {

  state = {
    persons: [
      { name : 'Jack', age: 28},
      { name : 'Echo', age: 28},
      { name : 'Java', age: 28}

    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I am Dafei Ning</h1>
        <button>Swtich Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name="Echo" age="27">
          My hobbie is eat bianbian.
        </Person>
        <Person name="Java" age="26" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is BaobaoHui!'));
  }
}

export default App;
