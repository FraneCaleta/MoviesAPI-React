import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../actions";

class MovieList extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  renderAdmin(movie) {
    if (movie.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/movies/edit/${movie.id}`} className="ui button primary">
            Edit
          </Link>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/movies/new" className="ui button primary">
            Create Movie
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.movies.map((movie) => {
      return (
        <div className="item" key={movie.id}>
          {this.renderAdmin(movie)}
          <i className="large middle aligned icon play circle outline" />
          <div className="content">
            {movie.title}
            <div className="description">{movie.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Movies</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: Object.values(state.movies),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchMovies })(MovieList);
