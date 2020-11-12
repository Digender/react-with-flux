import React from "react";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
// import CoursesPage from "./Courses";
import CoursesFunPage from "./CoursesFun";
import Homepage from "./HomePage";
import { Redirect, Route, Switch } from 'react-router-dom';
import NotFoundPage from "./common/NotFoundPage";
import ManageCoursepage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return <div className='container-fluid'>
    <ToastContainer autoclose="3000" hideProgressBar/>
    <Header/>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/courses" component={CoursesFunPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/course/:slug" component={ManageCoursepage} />
      <Route path="/course" component={ManageCoursepage} />
      <Redirect from="about-page" to="about"></Redirect>
      <Route component={NotFoundPage} />
    </Switch>
  </div>
}

export default App;