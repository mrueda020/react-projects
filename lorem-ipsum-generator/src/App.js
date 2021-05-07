import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      setText(data.slice(0, 1));
    }
    if (amount > data.length) {
      amount = data.length;
      setText(data.slice(0, amount));
    } else {
      setText(data.slice(0, amount));
    }
  };
  return (
    <section className="section-center">
      <h3>Lorem Ipsum generator</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label>Paragraphs</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        ></input>
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
