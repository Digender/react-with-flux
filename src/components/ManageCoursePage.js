import React, { useEffect, useState } from "react";
import CourseForm from "./CourseForm";
// import * as CourseApi from "../api/courseApi";
import courseStore from "../stores/courseStore";
import { toast } from "react-toastify";
// import { Prompt } from "react-router-dom";
import * as courseActions  from "../actions/courseActions";

const ManageCoursepage = props => {

  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourses();
    }
    else if (slug) {
      setCourse(courseStore.getCoursesBySlug(slug));
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug])

  function formIsValid() {
    const _errors = {};

    if (!course.title) {
      _errors.title = "Title is required";
    }

    if (!course.authorId) {
      _errors.author = "Author is required";
    }

    if (!course.category) {
      _errors.category = "Category is required";
    }

    setErrors(_errors);
    //Form is Valid if the error has no properties 
    return Object.keys(_errors).length === 0;
  }

  function handleChange({ target }) {
    setCourse({
      ...course,
      [target.name]: target.value
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;

    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved.");
    });
  }

  function onChange() {
    setCourses(courseStore.getCourses());  
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleFormSubmit}
      />
      {props.match.params.slug}
    </>
  )
}

export default ManageCoursepage;
