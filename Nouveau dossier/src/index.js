import React from "react";
import ReactDOM from "react-dom";

import Photo from "./photo.js";
import Title from "./title.js";
import Wrapper from "./wrapper.js";

function App() {
  return (
    <Wrapper>
      <Photo src="/f.jpg" />
      <Title style={{ color: "red" }}>My Name here</Title>
      <Title small>My job here</Title>
    </Wrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
