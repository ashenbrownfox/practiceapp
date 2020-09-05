import React, { Component,useState, useEffect } from "react";

class Form extends Component {
  constructor(){
      super()
      this.state = {
          firstName: "",
          lastName: "",
          age: 0,
          gender: "",
          destination: "",
          dietaryRestrictions: []
      }
      this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
      const {name, value} = event.target
      this.setState({
          [name]: value
      })
  }
  render(){
      return (
          <form>
              <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} value={this.state.firstName} />
              <br/>
              <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} value={this.state.lastName} />
              <br/>
              <input type="text" name="age" placeholder="Age" placeholder="Last Name" onChange={this.handleChange} value={this.state.age}/>
              <button>Submit</button>
              <p>Your name {this.state.firstName} {this.state.lastName}</p>
              <p>Your age: {this.state.age}</p>         
          </form>
      )
  }

}

export default Form;
