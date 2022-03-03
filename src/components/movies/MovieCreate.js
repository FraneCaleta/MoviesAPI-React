import React from "react";
import { connect } from "react-redux";
import { createMovie } from "../../actions";
import MovieForm from "./MovieForm";

class MovieCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createMovie(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Movie</h3>
        <MovieForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createMovie })(MovieCreate);
