import React, { Component } from "react";
//import logo from './logo.svg';
import Person from "./Person";

class App extends Component {
  state = {
    persons: [
      { name: "Jack", age: 28 },
      { name: "Echo", age: 28 },
      { name: "Java", age: 28 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { id: '0001', name: "Max", age: 28 },
        { id: '0002', name: event.target.value, age: 28 },
        { id: '0003', name: "JavaScript", age: 28 }
      ]
    });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}

        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi This is a Demo!</h1>
        <button className="SwitchButton"
          onClick={this.togglePersonsHandler}>Swtich Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is BaobaoHui!'));
  }
}

export default App;
