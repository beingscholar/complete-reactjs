import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1001', name: 'Mayank', age: 32 },
      { id: '1002', name: 'Athrva', age: 4 },
      { id: '1003', name: 'Shinni', age: 29 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Mayank Agarwal';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 32 },
  //       { name: 'Athrva', age: 4 },
  //       { name: 'Shinni', age: 30 }
  //     ]
  //   });
  // }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Dhruva', age: 32 },
        { name: event.target.value, age: 4 },
        { name: 'Shinni', age: 24 }
      ]
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age} />
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>

        {persons}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
