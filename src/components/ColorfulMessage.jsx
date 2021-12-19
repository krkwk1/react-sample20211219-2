import React from "react";

const ColorfulMessage = (props) => {
  const style = {
    color: props.color
  };

  return <p style={style}>{props.message}</p>;
};

export default ColorfulMessage;
