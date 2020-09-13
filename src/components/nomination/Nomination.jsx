import React, { Component } from "react";

class Nomination extends Component {
  constructor(props) {
    super(props);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    localStorage.setItem("Nomination", JSON.stringify(this.props.nominations));
  };

  removeItem = (itemId) => {
    this.props.deleteItem(itemId);
  };

  removeDisable = (itemId) => {
    const disabled = JSON.parse(localStorage.getItem("disabled"));

    let results = disabled.filter((item) => {
      return item !== itemId;
    });

    localStorage.setItem("disabled", JSON.stringify(results));
    this.forceUpdate();
  };

  forceUpdateHandler = () => {
    this.forceUpdate();
  };

  render() {
    console.log(this.props.nominations);

    return (
      <div>
        {this.props.nominations.map((item) => {
          return (
            <div key={item.id}>
              {item.title}{" "}
              {/* //<button onClick={() => this.removeItem(item.id)}>Delete</button> */}
              <button
                key={item.id}
                onClick={() => {
                  this.removeItem(item.id);
                  this.removeDisable(item.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Nomination;
