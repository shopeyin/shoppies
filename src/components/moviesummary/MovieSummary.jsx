import React, { Component } from "react";
import "./movie.style.scss";

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

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (this.state.disabled !== prevState.disabled) {
  //     localStorage.setItem("disabled", JSON.stringify(this.state.disabled));
  //   }
  //   return false;
  // };

  items = [];

  handleStorageDisable = (itemId) => {
    this.items.push(itemId);
    localStorage.setItem("disabled", JSON.stringify(this.items));
  };

  handleDisabled = (imdbID) => {
    let disabled = [...this.state.disabled, imdbID];

    this.handleStorageDisable(imdbID);
    this.setState({
      disabled,
    });
  };

  render() {
    const { Title, imdbID, Poster, Year } = this.props.movie;
    console.log(`Disable called ${this.state.disabled}`);
    return (
      <div className="movie-container">
        {" "}
        <div
          className="card mt-3"
          style={{
            backgroundImage: `url(${Poster})`,
          }}
        ></div>
        <div className="mini-card">
          <div className="title"> {this.props.movie.Title}</div>
          <div className="year"> {this.props.movie.Year}</div>
        </div>
        <div className="button-container">
          <button
            key={imdbID}
            className="btn btn-outline-warning mt-3"
            disabled={this.state.disabled.indexOf(imdbID) !== -1}
            onClick={() => {
              this.addingItem({
                title: Title,
                id: imdbID,
                year: Year,
              });
              this.handleDisabled(imdbID);
            }}
          >
            Nominate
          </button>
        </div>
      </div>
    );
  }
}

export default MovieSummary;
