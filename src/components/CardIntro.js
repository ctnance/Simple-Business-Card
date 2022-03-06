import React from "react";

export default function CardIntro(props) {
  return (
    <div className="card-intro">
      <h1 className="card-intro--title">{props.name}</h1>
      <p className="card-intro--position">{props.positon}</p>
      <p className="card-intro--website">{props.website}</p>
    </div>
  );
}
