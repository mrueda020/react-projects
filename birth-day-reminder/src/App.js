import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>
          {people.length > 0
            ? `${people.length} birthdays today`
            : "No birtdays today"}
        </h3>
        {people.length === 0 ? (
          <button
            onClick={() => {
              setPeople(data);
            }}
          >
            Reset People
          </button>
        ) : (
          <>
            <List people={people} setPeople={setPeople}></List>
            <button
              onClick={() => {
                setPeople([]);
              }}
            >
              Clear All
            </button>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
