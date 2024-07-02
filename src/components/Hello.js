import React from "react";
const Hello = (props) => {
  const { name, initial } = props;
  return (
    <div>
      <h1>
        Hello {name} {initial}
      </h1>
    </div>
  );
};
export default Hello;
