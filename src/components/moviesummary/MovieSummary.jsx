import React, { Component } from "react";
class MovieSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mov: [],
      disabled: [],
    };
  }

  addingItem = (item) => {
    this.props.addItem(item);
  };

  handleDisabled = (imdbID) => {
    this.setState({
      disabled: [...this.state.disabled, imdbID],
    });
  };

  render() {
    const { Title, imdbID } = this.props.movie;
    console.log(this.state.disabled);
    console.log(this.props.movie);
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
