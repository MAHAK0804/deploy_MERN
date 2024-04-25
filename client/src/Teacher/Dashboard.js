import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

import './Dash.css';

export default function Dashboard() {
  return (
    <div>
        <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand btn btn-primary" data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample"><i class="fa fa-bars" aria-hidden="true"></i></Link>

                    <div class="hstack gap-3">
                        <div class="p-2"> <i class='fa fa-bell'></i></div>
                        <div class="p-2 ms-auto"> <i class="fa fa-envelope" aria-hidden="true"></i></div>
                        <div class="vr"></div>
                        <div class="p-2"> <i class="fa fa-user" aria-hidden="true"></i></div>
                    </div>
                </div>



                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="p-6 mb-2 bg-secondary text-white" id='user'>

                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                            <i class="fa fa-user" id='fauser' aria-hidden="true">  John Smith
                            </i>
                        </h5>
                    </div>
                    <div class="offcanvas-body">
                        <br />
                        <div class="list-group">
                            <Link to="/teacher/dashboard">  <button type="button" class="list-group-item list-group-item-action" aria-current="true">
                                <i class="fa fa-book"></i>Dashboard
                            </button></Link>
                            <br />
                            <Link to="/teacher/attendance">
                                <button type="button" class="list-group-item list-group-item-action">
                                    <i class='fa fa-calendar'></i>Attendance
                                </button></Link>
                            <br />

                            <Link to="/teacher/notice">
                                <button type="button" class="list-group-item list-group-item-action">
                                    <i class="fa fa-sticky-note"></i>Notice</button></Link>
                            <br />

                            <Link to="/teacher/complain"> 
                             <button type="button" class="list-group-item list-group-item-action">
                              <i class="fa fa-exclamation"></i>Complain</button></Link>
                              <br />

<Link to="/teacher/assessment">
    <button type="button" class="list-group-item list-group-item-action">
    <i class="fa fa-tasks"></i>Assessment</button></Link>

        <br />

<Link to="/teacher/lectures">
    <button type="button" class="list-group-item list-group-item-action">
    <i class="fa fa-laptop"></i>Lectures</button></Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="card-group">
                <div class="card text-bg-info mb-3">
                    <h2> <i class="fa fa-user"></i>Total Classes</h2>
                    <div class="card-body">
                        <h3 class="card-title">5</h3>

                    </div>
                </div>
                <div class="card text-bg-info mb-3">
                    <h2> <i class="fa fa-book"></i>Total Courses</h2>
                    <div class="card-body">
                        <h3 class="card-title">10</h3>

                    </div>
                </div>
                <div class="card text-bg-info mb-3">
                    <h2> <i class="fa fa-star"></i>Average Ratings</h2>
                    <div class="card-body">
                        <h3 class="card-title">4.5/5</h3>
                    </div>
                </div>
            </div>
            <div class="card-group">
                <div class="card text-bg-light mb-3">
                <h2>SCHEDULE OF CLASSES</h2>
                <Table responsive>
        <thead>
          <tr>
            <th>Timing</th>
            <th>8:30-9:30</th>
            <th>9:30-10:30</th>
            <th>10:30-11:30</th>
            <th>11:30-12:00</th>
            <th>12:00-1:00</th>
            <th>1:00-2:00</th>
            <th>2:00-3:00</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>Class-6(A)</td>
            <td>Class-8(B)</td>
            <td>Class-7(A)</td>
            <td>LUNCH</td>
            <td>Class-9(C)</td>
            <td>Class-6(A)</td>
            <td>Class-8(B)</td>
          </tr>
          <tr>
          <td>Tuesday</td>
            <td>Class-7(A)</td>
            <td>Class-8(B)</td>
            <td>Class-6(A)</td>
            <td>LUNCH</td>
            <td>Class-9(C)</td>
            <td>Class-7(A)</td>
            <td>Class-8(B)</td>
          </tr>
          <tr>
          <td>Wendesday</td>
            <td>Class-6(A)</td>
            <td>Class-8(B)</td>
            <td>Class-7(A)</td>
            <td>LUNCH</td>
            <td>Class-9(C)</td>
            <td>Class-6(A)</td>
            <td>Class-8(B)</td>
          </tr>
          <tr>
          <td>Thursday</td>
            <td>Class-6(A)</td>
            <td>Class-8(B)</td>
            <td>Class-7(A)</td>
            <td>LUNCH</td>
            <td>Class-9(C)</td>
            <td>Class-6(A)</td>
            <td>Class-8(B)</td>
          </tr>
          <tr>
          <td>Friday</td>
            <td>Class-6(A)</td>
            <td>Class-8(B)</td>
            <td>Class-7(A)</td>
            <td>LUNCH</td>
            <td>Class-9(C)</td>
            <td>Class-6(A)</td>
            <td>Class-8(B)</td>
          </tr>
          <tr>
          <td>Saturday</td>
            <td>Class-6(A)</td>
            <td>Class-8(B)</td>
            <td>Class-7(A)</td>
            <td>LUNCH</td>
            <td>Class-9(C)</td>
            <td>Class-6(A)</td>
            <td>Class-8(B)</td>
          </tr>
        </tbody>
      </Table>
 ;
                    </div>
                </div>

            
            </div>
      
  )
}
