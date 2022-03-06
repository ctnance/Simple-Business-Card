import React from "react";

export default function CardDetailContainer(props) {
  return (
    <section className="detail--container">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </section>
  );
}
