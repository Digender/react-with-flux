import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types"

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
        <TextInput
          id={props.id}
          type="text"
          name="title"
          value={props.course.title}
          onChange={props.onChange}
          error={props.errors.title}
        />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId || ""}
            onChange={props.onChange}
            className="form-control"
            error={props.errors.authorId}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.author && (
        <div className="alert alert-danger">{props.errors.author}</div>
      )}
      </div>

      <TextInput
        id="category"
        name="category"
        value={props.course.category}
        onChange={props.onChange}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary"/>
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CourseForm;
