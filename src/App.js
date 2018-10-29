import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am Dafei Ning</h1>
        <Person name = "Jack" age ="28"/>
        <Person name = "Echo" age ="27">My hobbie is eat bianbian.</Person>
        <Person name = "Java" age ="26"/>

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is BaobaoHui!'));
  }
}

export default App;
