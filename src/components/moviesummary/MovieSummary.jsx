import React, { Component } from "react";
class MovieSummary extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   nominations: ["mango", "fruit"],
    // };
  }

  addItem = () => {
    const item = "hello";
  };

  render() {
    return (
      <div>
        {" "}
        <h5>
          {this.props.movie.Title}{" "}
          <button onClick={this.addItem}>Nominate</button>
        </h5>
      </div>
    );
  }
}

export default MovieSummary;
