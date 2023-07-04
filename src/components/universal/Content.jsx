import React, { Children } from "react";

const Content = (props) => {
  return (
    <React.Fragment>
      <div className="flex-grow">{props.children}</div>
    </React.Fragment>
  );
};

export default Content;
