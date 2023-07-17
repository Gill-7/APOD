import React from "react";
import "./Data.css";

const Data = ({ data }) => {
  //   console.log(data);
  return (
    <div className="container">
      <img className="image" src={data.url} alt="today" />
      <h3>{data.title}</h3>
      <p className="explanation">{data.explanation}</p>
    </div>
  );
};

export default Data;
