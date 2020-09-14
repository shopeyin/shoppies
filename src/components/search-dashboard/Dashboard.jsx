// import React, { Component } from "react";
// import MovieSummary from "../moviesummary/MovieSummary";
// import "./dashboard.style.scss";
// import Nomination from "../nomination/Nomination";

// class Dashboard extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       nominations: [],
//     };
//   }

//   addItem = (item) => {
//     this.setState({
//       nominations: [...this.state.nominations, item],
//     });
//   };

//   deleteItem = (itemId) => {
//     const nominations = this.state.nominations.filter(
//       (item) => item.id !== itemId
//     );
//     this.setState({
//       nominations,
//     });
//   };

//   disableBtnn = () => {
//     this.setState({
//       disableBtn: true,
//     });
//   };

//   render() {
//     const { movies } = this.props;
//     const { nominations, disableBtn } = this.state;
//     //console.log(`MOV ${movies} and NOM ${nominations}`);
//     if (nominations.length === 5) {
//       console.log("it is okay");
//     }
//     return (
//       <div className="dashboard">
//         <div className="result">
//           Search Result{" "}
//           <button
//             disabled={disableBtn ? true : null}
//             onClick={() =>
//               this.setState({
//                 disableBtn: true,
//               })
//             }
//           >
//             SENDD
//           </button>
//           {movies &&
//             movies.map((movie) => {
//               return (
//                 <div key={movie.imdbID}>
//                   h-{movie.Title}{" "}
//                   <button
//                     // disabled=true
//                     key={movie.imdbID}
//                     onClick={() =>
//                       this.addItem({ title: movie.Title, id: movie.imdbID })
//                     }
//                   >
//                     Nominate
//                   </button>{" "}
//                 </div>
//               );
//             })}
//         </div>
//         <div className="nomination">
//           <Nomination nominations={nominations} deleteItem={this.deleteItem} />
//         </div>
//       </div>
//     );
//   }
// }

// export default Dashboard;

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

  componentDidMount() {
    localStorage.getItem("Nomination") &&
      this.setState({
        nominations: JSON.parse(localStorage.getItem("Nomination")),
      });
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

    // if (nominations.length === 5) {
    //   console.log("It is okay");
    // }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-md-2 nomination-box">
            <Nomination
              nominations={nominations}
              deleteItem={this.deleteItem}
            />
          </div>
          <div className="col-md-6 order-md-1 row-container mb-4">
            {movies &&
              movies.map((movie) => {
                return (
                  <MovieSummary
                    key={movie.imdbID}
                    movie={movie}
                    addItem={this.addItem}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
