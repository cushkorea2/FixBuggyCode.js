import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const firstName = "Adda";
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <h1>Buggy Code Challenge</h1>
      <p>This year is: {currentYear}</p>
      <p>{firstName} is my favorite crusher of skillz!</p>
      {/* This comment shouldn't appear on the screen, just in the code */}
      <h3 className="red">Make me colorful!</h3>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
