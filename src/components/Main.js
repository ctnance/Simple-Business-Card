import React from "react";
import CardIntro from "./CardIntro";
import ContactContainer from "./ContactContainer";
import CardDetailContainer from "./CardDetailContainer";

export default function Main() {
  return (
    <main>
      <CardIntro
        name="Laura Smith"
        positon="Frontend Developer"
        website="laruasmith.website"
      />
      <ContactContainer />
      <CardDetailContainer
        title="About"
        content="I am a frontend developer with a particular interest in making things simple
          and automating daily tasks. I try to keep up with security and best
          practices, and am always looking for new things to learn."
      />
      <CardDetailContainer
        title="Interests"
        content="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
      />
    </main>
  );
}
