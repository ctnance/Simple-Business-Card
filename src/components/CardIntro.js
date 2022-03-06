import React from "react";

export default function CardIntro(props) {
  return (
    <div className="card--intro">
      <h1 className="header--title">{props.name}</h1>
      <p>{props.positon}</p>
      <small>{props.website}</small>
    </div>
  );
}
