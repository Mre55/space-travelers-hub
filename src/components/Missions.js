import React from 'react';
import Mission from './Mission';

const Missions = () => {
  const missions = [
    {
      title: 'Title 1',
      description:
        'Description 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, id. Exercitationem ab, dolorum nostrum voluptate fuga architecto id dolore a quam voluptatibus quos perspiciatis iure porro tempore quod itaque dicta.',
      member: false,
    },
    {
      title: 'Title 2',
      description:
        'Description 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, id. Exercitationem ab, dolorum nostrum voluptate fuga architecto id dolore a quam voluptatibus quos perspiciatis iure porro tempore quod itaque dicta.',
      member: true,
    },
    {
      title: 'Title 3',
      description:
        'Description 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, id. Exercitationem ab, dolorum nostrum voluptate fuga architecto id dolore a quam voluptatibus quos perspiciatis iure porro tempore quod itaque dicta.',
      member: false,
    },
    {
      title: 'Title 4',
      description:
        'Description 4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, id. Exercitationem ab, dolorum nostrum voluptate fuga architecto id dolore a quam voluptatibus quos perspiciatis iure porro tempore quod itaque dicta.',
      member: false,
    },
  ];
  return (
    <div>
      <div className="grid">
        <div className="grid grid-cols-4">
          <div>Mission</div>
          <div>Description</div>
          <div>Status</div>
          <div>Action</div>
        </div>
        {missions.map((mission, index) => (
          <Mission key={index} mission={mission} />
        ))}
      </div>
    </div>
  );
};

export default Missions;
