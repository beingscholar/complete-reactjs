import React, { Component } from 'react';
import Style from './App.css';
import Person from './Person/Person';
import Error from './Errors/ErrorHandler';

class App extends Component {
  state = {
    persons: [
      { id: '1001', name: 'Mayank', age: 32 },
      { id: '1002', name: 'Athrva', age: 4 },
      { id: '1003', name: 'Nitin', age: 29 }
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
  //       { name: 'Nitin', age: 30 }
  //     ]
  //   });
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Error key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.nameChangedHandler(event, person.id)} />
              </Error>
            })}
        </div>
      );
      btnClass = Style.Red;
    }
    const assignClass = [Style.red];  // classes = ['red']
    if (this.state.persons.length <= 2) {
      assignClass.push(Style.bold);   // classes = ['bold', 'red']
    }
    if (this.state.persons.length <= 1) {
      assignClass.push(Style.green);  // classes = ['bold', 'green']
    }
    return (
      <div className={Style.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignClass.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
