import React from "react";

export const FlipComponent = props => {
  return (
    <div className="flipContainer">
      <div className="flipBackSide">{props.children}</div>
      <div className="flipFrontSide">
        <img src={props.profile} alt="Pic" width="150px" height="150px" />
      </div>
    </div>
  );
};
