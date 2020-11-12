import React, { useEffect, useState } from "react";
// import { getCourses } from '../api/courseApi';
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { loadCourses, deleteCourse } from "../actions/courseActions";

function CoursesFunPage () {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange);//cleanup 
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());  
  }

  function deleteCourseWithId(id) {
    deleteCourse(id);
  }

  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={courses} deleteCourse={deleteCourseWithId}/>
    </>  
  )
}

export default CoursesFunPage;