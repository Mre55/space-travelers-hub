import React from 'react';

const Mission = (props) => {
  // const {
  //   mission: { title, description, status },
  // } = props;

  return (
    <div className="grid grid-cols-4">
      <div>Title</div>
      <div>
        Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Excepturi accusantium aspernatur quos debitis, officiis pariatur
        temporibus quae voluptates impedit assumenda itaque necessitatibus
        molestiae incidunt asperiores dolores veritatis, provident quaerat
        doloribus harum similique alias est dicta ratione modi. Repellendus
        temporibus, expedita ipsum enim, fuga, molestias ullam fugiat vel
        commodi animi cum.
      </div>
      <div>
        <div>Badge</div>
      </div>
      <div>
        <button>Join</button>
      </div>
    </div>
  );
};

export default Mission;
