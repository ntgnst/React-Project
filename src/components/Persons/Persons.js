import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  
  static getDerivedStateFromProps(props, state) {
    console.log("Persons.js getDerivedStateFromProps ");
    return [props, state];
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Persons.js shouldComponentUpdate");
    const condition = nextProps.persons[0].name === "Maxwd1" ? false : true;
    return condition;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Person.js getSnapshotBeforeUpdate");
    console.log([prevProps, prevState]);
    return { message: "This is Snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Updated ! . ");
    console.log(snapshot);
  }
  render() {
    console.log("Persons.js rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
