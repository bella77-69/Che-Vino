import React from "react";
import "./title.scss";

const Title = ({ title }) => {
  return (
    <div className="section">
      <h4 className="section-title faq-title">{title}</h4>
      <div className="section-div" />
    </div>
  );
};

export default Title;