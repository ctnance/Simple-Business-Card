import React from "react";

export default function CardDetailContainer(props) {
  return (
    <section className="detail--container">
      <h3 className="detail--container--title">{props.title}</h3>
      <p className="detail--container--content">{props.content}</p>
    </section>
  );
}
