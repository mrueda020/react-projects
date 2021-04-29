import React from "react";

const List = (props) => {
  const { people, setPeople } = props;

  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article
            key={id}
            className="person"
            onClick={() => {
              let peopleFiltered = people.filter((person) => person.id !== id);
              setPeople(peopleFiltered);
            }}
          >
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;