import React, { Component } from "react";
import "./homepage.style.scss";
import Dashboard from "../components/search-dashboard/Dashboard";
import SearchField from "../components/search-box/SearchField";

class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      searchField: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchField !== this.state.searchField) {
      fetch(
        `http://www.omdbapi.com/?s=${this.state.searchField}&apikey=4ce50211#`
      )
        .then((response) => response.json())
        .then((movie) => this.setState({ movies: movie.Search }))
        .catch((error) => {
          console.log(error);
        });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ searchField: event.target.value });
  };
  render() {
    const { movies } = this.state;

    return (
      <div className="container-fluid b">
        <div className="row search-container d-flex justify-content-center align-items-end">
          <div className="col-md-8 ">
            <form onSubmit={this.state.handleSubmit}>
              <SearchField
                name="Search"
                placeholder="search movies"
                handleChange={this.handleChange}
              />
            </form>
          </div>
        </div>
        <div className="row dashboard">
          <div className="col-md-12 b">
            <Dashboard movies={movies} />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
