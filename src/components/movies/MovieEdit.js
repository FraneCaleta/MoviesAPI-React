import React from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../../actions";

class MovieEdit extends React.Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  render() {
    if (!this.props.movie) {
      return <div>Loading...</div>;
    }

    return <div>{this.props.movie.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movies[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps)(MovieEdit);
