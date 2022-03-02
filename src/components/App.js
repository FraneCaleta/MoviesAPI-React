import React from "react";
import { Router, Route } from "react-router-dom";
import MovieCreate from "./movies/MovieCreate";
import MovieDelete from "./movies/MovieDelete";
import MovieEdit from "./movies/MovieEdit";
import MovieList from "./movies/MovieList";
import MovieShow from "./movies/MovieShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={MovieList} />
          <Route path="/movies/new" exact component={MovieCreate} />
          <Route path="/movies/edit" exact component={MovieEdit} />
          <Route path="/movies/delete" exact component={MovieDelete} />
          <Route path="/movies/show" exact component={MovieShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
