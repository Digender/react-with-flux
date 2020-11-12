import EventEmitter from "events";
import ACTIONS from "../actions/actionTypes";
import Dispatcher from "../appDispatcher";

const changeEvent = "change";
let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(changeEvent, callback);
  };

  removeChangeListener(callback)  {
    this.removeListener(changeEvent, callback);
  }

  emitChange() {
    this.emit(changeEvent);
  }

  getCourses() {
    return _courses;
  }

  getCoursesBySlug(slug) {
    return _courses.find(course => course.slug === slug);
  }
}

const store = new CourseStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case ACTIONS.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;
    case ACTIONS.LOAD_COURSES:
      _courses= action.courses;
      store.emitChange();
      break;
    case ACTIONS.UDPATE_COURSE:
      _courses = _courses.map((course) => course.id === action.course.id
        ? action.course
        : course);
      store.emitChange();
      break;
    case ACTIONS.DELETE_COURSE:
    _courses = _courses.filter((course) => (course.id !== Number(action.id)));
    store.emitChange();
    break;    
    default: break;

  }
});

export default store;