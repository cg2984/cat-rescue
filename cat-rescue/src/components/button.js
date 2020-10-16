import React, { Component } from 'react';
class Button extends Component {
  render(props) {
  	//need the "this." I have no idea why maybe because the class needs to know the scope of the object that it is looking at?
  	//it says its undefined if you take it out
  	return <button><p>{this.props.name}</p></button>
  }
}

export default Button;