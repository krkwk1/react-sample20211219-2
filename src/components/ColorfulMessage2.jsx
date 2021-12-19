import React from "react";

export const ColorfulMessage2 = (props) => {
  const { color, children } = props; //分割代入
  const style = {
    color
  };

  return <p style={style}>{children}</p>;
};
