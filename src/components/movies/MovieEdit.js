import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { formValues } from "redux-form";
import { fetchMovie, editMovie } from "../../actions";
import MovieForm from "./MovieForm";

class MovieEdit extends React.Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editMovie(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.movie) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Movie</h3>
        <MovieForm
          initialValues={_.pick(this.props.movie, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movies[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchMovie, editMovie })(MovieEdit);
