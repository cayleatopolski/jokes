import React from "react";
import "./App.css";
import Joke from "./Joke";

const App = () => {
  return (
    <div>
      <Joke
        question="Why do we tell actors to 'break a leg?'"
        answer="Because every play has a cast."
      />
      <Joke
        question="What's the best thing about Switzerland?"
        answer="I don't know, but the flag is a big plus."
      />
      <Joke
        question="Did you hear about the mathematician who's afraid of negative numbers?"
        answer="He'll stop at nothing to avoid them."
      />
      <Joke
        question="Hear about the new restaurant called Karma?"
        answer="There’s no menu: You get what you deserve."
      />
      <Joke answer="I threw a boomerang a few years ago. I now live in constant fear." />
    </div>
  );
};

export default App;
