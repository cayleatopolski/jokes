import React from "react";

const Joke = (props) => {
  return (
    <div>
      <h2 style={{ display: props.question ? "block" : "none" }}>
        Question : {props.question}
      </h2>
      <h3>Answer: {props.answer}</h3>
      <br />
    </div>
  );
};

export default Joke;

// display: !props.question && "none"
