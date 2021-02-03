import React, {Component} from "react";
import { render } from "react-dom";
import Person from "./Person/Person";

class Persons extends Component {

// static getDerivedStateFromProps(props, state) {
// console.log('[Person.js] getDerivedStare From Props')
//   return state;
// }

shouldComponentUpdate(nextProps, nextState) {
  console.log("[Person.js] shouldComponentUpdate");
  
  return true;
}

getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log('[Persons.js] getSnapshotBeforeUpdate')
}

componentDidUpdate(){
  console.log('[Persons.js] DidUpdate')
}

  render() {
  console.log("[Person.js] rendering...");
  return this.props.persons.map((person, index) => {
    return (
      <Person
        // persons={this.state.persons}
        name={person.name}
        age={person.age}
        click={() => this.props.clicked(index)}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}
      />
    );
  });
}
};

export default Persons;
