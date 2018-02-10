import React from 'react';
import Style from './Cockpit.css';

const cockpit = (props) => {
    const assignClass = [Style.red];  // classes = ['red']
    let btnClass = '';

    if (props.showPersons)
        btnClass = Style.Red;

    if (props.length <= 2) {
        assignClass.push(Style.bold);   // classes = ['bold', 'red']
    }
    if (props.length <= 1) {
        assignClass.push(Style.green);  // classes = ['bold', 'green']
    }

    return (
        <div className={Style.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignClass.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;