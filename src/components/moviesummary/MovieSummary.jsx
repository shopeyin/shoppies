import React, { Component } from "react";

let items = [];

class MovieSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: [],
    };
  }

  addingItem = (item) => {
    this.props.addItem(item);
  };

  componentDidMount() {
    localStorage.getItem("disabled") &&
      this.setState({
        disabled: JSON.parse(localStorage.getItem("disabled")),
      });
  }

  handleStorageDisable = (itemId) => {
    items.push(itemId);
    localStorage.setItem("disabled", JSON.stringify(items));
  };

  handleDisabled = (imdbID) => {
    let disabled = [...this.state.disabled, imdbID];

    this.handleStorageDisable(imdbID);
    this.setState({
      disabled,
    });
  };

  render() {
    const { Title, imdbID } = this.props.movie;
    console.log(`here oo ${this.state.disabled}`);
    return (
      <div>
        {" "}
        <h5>
          {this.props.movie.Title}{" "}
          <button
            key={imdbID}
            disabled={this.state.disabled.indexOf(imdbID) !== -1}
            onClick={() => {
              this.addingItem({
                title: Title,
                id: imdbID,
              });
              this.handleDisabled(imdbID);
            }}
          >
            Nominate
          </button>
        </h5>
      </div>
    );
  }
}

export default MovieSummary;
