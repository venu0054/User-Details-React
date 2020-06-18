import React from "react";
import "../App.css";

const Radio = props => {

  const checkStyle = {
    margin: "10px 10px 10px 10px"
  };
  return (
    <div id="rr-element"  className="form-group">
      <label htmlFor={props.name}  className="form-label">
        {props.title}
      </label>
      <div className="radio">
        {props.options.map(option => {
          return (
            <label key={option} style={checkStyle} className="btn btn-info">
              <input
                id={props.name}
                name={props.name}
                onChange={props.handleChange}
                value={option}
                checked={props.radioChecked}
                // checked={props.selectedOptions.indexOf(option) > -1}
                type="radio"
              />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Radio;
