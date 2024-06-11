import React from "react";
import "./Data.css";

const Data = ({ data }) => {
  return (
    <div className="container">
      {data.media_type === "video" ? (
        <div className="video-container">
          <p>
            This link will open in youtube. You can still read the information
            below:
          </p>
          <a href={`${data.url}`} target="_blank" without rel="noreferrer">
            {data.url}
          </a>
        </div>
      ) : (
        <img className="image" src={data.url} alt="today" />
      )}
      <div>
        <h3>{data.title}</h3>
        <p className="explanation">{data.explanation}</p>
      </div>
    </div>
  );
};

export default Data;
