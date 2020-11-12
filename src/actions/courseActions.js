import dispatcher from "../appDispatcher";
import ACTIONS from "./actionTypes";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      actionType: course.id ? ACTIONS.UDPATE_COURSE : ACTIONS.CREATE_COURSE,
      course: savedCourse,
    });
  })
}


export function loadCourses() {
  return courseApi.getCourses().then((courses) => {
    dispatcher.dispatch({
      actionType: ACTIONS.LOAD_COURSES,
      courses,
    });
  })
}

export function deleteCourse(id) {
  return courseApi.deleteCourse(id).then(() => {
    toast.success("Deleted Successfully");
    dispatcher.dispatch({
      actionType: ACTIONS.DELETE_COURSE,
      id,
    });
  })
}


