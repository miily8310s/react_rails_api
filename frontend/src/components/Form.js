import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.handleSubmit}>
          <input name="title" type="text" placeholder="enter here"></input>
          <button type="submit" id="ent">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
