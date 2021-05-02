import React, { useState } from "react";
import data from "./data";
import Question from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and answers </h3>
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </div>
    </main>
  );
}

export default App;
