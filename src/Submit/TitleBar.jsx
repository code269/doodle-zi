import React from "react";

function TitleBar(props) {
  return (
    <div className="submit-title">
      <h3 className="submit-title-text">{props.text}</h3>
    </div>
  );
}

export default TitleBar;
