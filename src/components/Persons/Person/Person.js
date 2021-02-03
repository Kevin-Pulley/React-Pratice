import React, {Component} from "react";
import styled from "styled-components";
import classes from './Person.css'

// import "./Person.css"

class Person extends Component  {

  render() {
    console.log('[Person.js] rendering...')

    return (
      // <div className="Person" style ={style}>
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          className={this.props.className}
        />
      </div>
    );
  }
};

export default Person;
