import React from "react";
import PropTypes from "prop-types";

function TextInput (props) {
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass+= "has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>Category</label>
      <div className="field">
        <input
          type="text"
          id={props.id}
          name={props.name}
          className="form-control"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  )
}

export default TextInput;

TextInput.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
}

TextInput.defaultProps = {
  error: ""
}
