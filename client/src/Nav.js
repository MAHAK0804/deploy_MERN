import logo from './assets/logo.png';
import './Nav.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Home/Home.js';
import About from './About/About.js';
import Services from './Services/Services.js';
import Events from './Events/Events.js';
import Contact from './Contactus/Contactus.js';
import Teacherlogin from './Login/Teachers_login.js';
import Studentlogin from './Login/Student_login.js';
import Adminlogin from './Login/Admin_login.js';
import Signup from './Signup.js';
import Dashboard from './Admin/Dashboard.js';
import Attendance from './Admin/Attendance.js';
import Complain from './Admin/Complain.js';
import Notice from './Admin/Notice.js';
import TeacherDash from './Teacher/Dashboard.js';
import TeacherAttendance from './Teacher/Attendance.js';
import TeacherAssessment from './Teacher/Assessment.js';
import TeacherComplain from './Teacher/Complain.js';
import TeacherNotice from './Teacher/Notice.js';
import TeacherLectures from './Teacher/Lectures.js';
import Class7A from './Teacher/Class7A.js';
import Class6A from './Teacher/Class6A.js';
import Class8B from './Teacher/Class8B.js';
import Class9C from './Teacher/Class9C.js';


function Nav() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img src={logo} width='50px' height='50px' alt='logo' />
          <h2>VidhyaGhar</h2>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">  Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/About">  About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Services">  Services</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Contact">  Contact</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link disabled" aria-disabled="true" to="/Events">  Events</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Login
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="/Adminlogin">ADMIN</Link></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><Link class="dropdown-item" to="/Teacherslogin">TEACHERS</Link></li>
                  <li><hr class="dropdown-divider" /></li>

                  <li><Link class="dropdown-item" to="/Studentlogin">STUDENTS</Link></li>
                </ul>
              </li>

            </ul>


            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>


          </div>
        </div>
      </nav>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        ></Route>
        <Route
          exact
          path="/About"
          element={<About />}
        ></Route>
        <Route
          exact
          path="/Services"
          element={<Services />}
        ></Route>
        <Route
          exact
          path="/Contact"
          element={<Contact />}
        ></Route>
        <Route
          exact
          path="/Events"
          element={<Events />}
        ></Route>
        <Route
          exact
          path="/Adminlogin"
          element={<Adminlogin />}
        ></Route>
        <Route
          exact
          path="/Teacherslogin"
          element={<Teacherlogin />}
        ></Route>
        <Route
          exact
          path="/Studentlogin"
          element={<Studentlogin />}
        ></Route>
        <Route
          exact
          path="/Signup"
          element={<Signup/>}
        ></Route>
          <Route
          exact
          path="/admin/dashboard"
          element={<Dashboard/>}
        ></Route>
          <Route
          exact
          path="/admin/attendance"
          element={<Attendance/>}
        ></Route>
          <Route
          exact
          path="/admin/complain"
          element={<Complain/>}
        ></Route>
          <Route
          exact
          path="/admin/notice"
          element={<Notice/>}
        ></Route>
         <Route
          exact
          path="/teacher/dashboard"
          element={<TeacherDash/>}
        ></Route>
         <Route
          exact
          path="/teacher/attendance"
          element={<TeacherAttendance/>}
        ></Route>
         <Route
          exact
          path="/teacher/notice"
          element={<TeacherNotice/>}
        ></Route>
         <Route
          exact
          path="/teacher/complain"
          element={<TeacherComplain/>}
        ></Route>
         <Route
          exact
          path="/teacher/assessment"
          element={<TeacherAssessment/>}
        ></Route>
         <Route
          exact
          path="/teacher/lectures"
          element={<TeacherLectures/>}
        ></Route>

<Route
          exact
          path="/teacher/Class-7A"
          element={<Class7A />}
        ></Route>

<Route
          exact
          path="/teacher/Class-6A"
          element={<Class6A />}
        ></Route>

<Route
          exact
          path="/teacher/Class-8B"
          element={<Class8B />}
        ></Route>

<Route
          exact
          path="/teacher/Class-9C"
          element={<Class9C />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default Nav;