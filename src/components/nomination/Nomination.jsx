import React, { Component } from "react";

class Nomination extends Component {
  constructor(props) {
    super(props);
  }

  removeItem = (itemId) => {
    this.props.deleteItem(itemId);
  };

  render() {
    console.log(this.props.nominations);
    return (
      <div>
        {this.props.nominations.map((item) => {
          return (
            <div key={item.id}>
              {item.title}{" "}
              <button onClick={() => this.removeItem(item.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Nomination;
