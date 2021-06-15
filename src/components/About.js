import React from "react";
import Links from "./links";

function About(props) {

  return (
    <div id="about">
      <h2>About Me</h2>
      { props.bio ? <p id="pTag">{ props.bio }</p> : null }
      {/* ternary - you can use ternary instead of an if else statement
      and to make javascript inside the return we open up curly brackets*/}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
