import React from "react";
import Modal from "../Modal";

const MovieDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      Delete a movie
      <Modal
        title="Delete Movie"
        content="Are you sure you want to delete this movie?"
        actions={actions}
      />
    </div>
  );
};

export default MovieDelete;
