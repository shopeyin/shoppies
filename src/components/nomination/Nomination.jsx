import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./nomination.style.scss";

toast.configure();
class Nomination extends Component {
  constructor(props) {
    super(props);
  }

  // getSnapshotBeforeUpdate = (prevProps, prevState) => {
  //   localStorage.setItem("Nomination", JSON.stringify(this.props.nominations));
  // };

  componentDidUpdate = (prevProps, nextProps) => {
    if (this.props.nominations !== prevProps.nominations) {
      localStorage.setItem(
        "Nomination",
        JSON.stringify(this.props.nominations)
      );
    }
    return false;
  };

  removeItem = (itemId) => {
    this.props.deleteItem(itemId);
  };

  notify = () => {
    toast("basic");
  };

  removeDisable = (itemId) => {
    const disabled = JSON.parse(localStorage.getItem("disabled"));

    let results = disabled.filter((item) => {
      return item !== itemId;
    });

    localStorage.setItem("disabled", JSON.stringify(results));
  };

  render() {
    console.log(this.props.nominations);
    // if (this.props.nominations.length === 5) {
    //   console.log("notificationnnnnnnn");
    //   this.notify();
    // }
    const style = {
      display: "flex",
      justifyContent: "space-between",
    };
    return (
      <div className="nomination-container">
        {this.props.nominations.map((item) => {
          return (
            <div
              className="card mt-3 text-center "
              style={{ height: "5rem" }}
              key={item.id}
            >
              <div style={style}>
                <div className="card-title ml-3 mt-3 text-info d">
                  <h4>
                    {item.title} ({item.year}){" "}
                  </h4>
                </div>
                <div style={style}>
                  <span
                    aria-hidden="true"
                    key={item.id}
                    onClick={() => {
                      this.removeItem(item.id);
                      this.removeDisable(item.id);
                    }}
                    className="mr-3 close mt-2"
                  >
                    &times;
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Nomination;
