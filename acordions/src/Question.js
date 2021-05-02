import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (props) => {
  const [open, setOpen] = useState(false);
  const { title, info } = props;
  const toggleInfo = () => {
    setOpen(!open);
  };
  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleInfo}>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {open && <p>{info}</p>}
    </div>
  );
};

export default Question;
