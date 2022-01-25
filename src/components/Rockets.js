import React from "react";
import { v4 } from "uuid";

import ListRockets from "./ListRockets";

const Rockets = () => {
    
  const rockets = [
    {
      flickr_images: "image 1",
      rocket_name: "Falcon 1",
      description:
        "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.",
      reserve: false,
    },
    {
      flickr_images: "image 2",
      rocket_name: "Falcon 9",
      description:
        "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport.",
      reserve: true,
    },
    {
      flickr_images: "image 3",
      rocket_name: "Falcon Heavy",
      description:
        "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner.",
      reserve: false,
    },
  ];

  return (
    <div>
      <div className="grid">
        <div className="grid grid-cols-5">
          <div>Image</div>
          <div>Name</div>
          <div>Status</div>
          <div>Description</div>
          <div>Action</div>
        </div>
        {rockets.map((rocket) => (
          <ListRockets key={v4()} rocket={rocket} />
        ))}
      </div>
    </div>
  );
};

export default Rockets;
