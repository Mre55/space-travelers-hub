import React from "react";
import { PropTypes } from "prop-types";

const ListRockets = (props) => {
  const {
    rocket: { flickr_images, rocket_name, description, reserve },
  } = props;

  return (
    <div>
      <div className="flex space-x-10">
        <div><img className="flex-none w-80" src={flickr_images} alt="Image" /></div>
        <div className="flex-none flex flex-col space-y-4 w-8/12">
          <div>
            <div className="text-3xl">{rocket_name}</div>
          </div>
          <div>
            <div className="bg-emerald-400 text-xs text-white p-2 rounded w-24">{reserve ? "Reserved" : "Not reserved"}</div>
          </div>
          <div>{description}</div>
          <div>
            <button className="bg-blue-600 text-white p-3 rounded" type="button">Reserve Rocket</button>
          </div>
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
