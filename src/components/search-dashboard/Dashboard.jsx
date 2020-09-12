import React, { Component } from "react";
import MovieSummary from "../moviesummary/MovieSummary";
import "./dashboard.style.scss";
import Nomination from "../nomination/Nomination";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nominations: [],
    };
  }

  addItem = (item) => {
    this.setState({
      nominations: [...this.state.nominations, item],
    });
  };

  deleteItem = (itemId) => {
    const nominations = this.state.nominations.filter(
      (item) => item.id !== itemId
    );
    this.setState({
      nominations,
    });
  };

  render() {
    const { movies } = this.props;
    const { nominations } = this.state;
    return (
      <div className="dashboard">
        <div className="result">
          Search Result{" "}
          <button disabled onClick={() => alert("hello")}>
            SENDD
          </button>
          {movies &&
            movies.map((movie) => {
              return (
                <div key={movie.imdbID}>
                  h-{movie.Title}{" "}
                  <button
                    onClick={() =>
                      this.addItem({ title: movie.Title, id: movie.imdbID })
                    }
                  >
                    Nominate
                  </button>{" "}
                </div>
              );
            })}
        </div>
        <div className="nomination">
          <Nomination nominations={nominations} deleteItem={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
