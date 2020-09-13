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

  // componentWillMount() {
  //   localStorage.setItem("nomin", "nom");
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem("nomin", "nom");
  // }

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

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ searchField: event.target.value });
  };
  render() {
    const { movies } = this.state;

    return (
      <div className="home">
        <div className="search">
          <SearchField
            name="search"
            placeholder="search movies"
            handleChange={this.handleChange}
          />
        </div>

        <Dashboard movies={movies} />
      </div>
    );
  }
}

export default Homepage;
