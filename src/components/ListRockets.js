import React from "react";
import { PropTypes } from "prop-types";

const ListRockets = (props) => {
  const {
    rocket: { flickr_images, rocket_name, description, reserve },
  } = props;

  return (
    <div>
      <div className="grid grid-cols-5">
        <div>{flickr_images}</div>
        <div>{rocket_name}</div>
        <div>
          <div>{reserve ? "Reserved" : "Not reserved"}</div>
        </div>
        <div>{description}</div>
        <div>
          <button type="button">Reserve Rocket</button>
        </div>
      </div>
      <br />
    </div>
  );
};

ListRockets.propTypes = {
  rocket: PropTypes.instanceOf(Object).isRequired,
};

export default ListRockets;
