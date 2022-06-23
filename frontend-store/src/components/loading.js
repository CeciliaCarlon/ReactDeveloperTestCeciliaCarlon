import React from "react";
import "./loading.css";

class Loading extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12 center">
            <h3>Loading</h3>
            <div className="loader"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Loading;
