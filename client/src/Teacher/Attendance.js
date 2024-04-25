import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function Attendance() {
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
            <Link to="/teacher/Class-7A">
    <Card className="text-center">
      <Card.Body>
       
        <Card.Text>
          <h2>CLASS-7(A)</h2>
         
        </Card.Text>
       
      </Card.Body>
    
    </Card>
    </Link>
    <Link to="/teacher/Class-6A">
    <Card className="text-center">
      <Card.Body>
       
        <Card.Text>
          <h2>CLASS-6(A)</h2>
         
        </Card.Text>
       
      </Card.Body>
    
    </Card>
    </Link>
    <Link to="/teacher/Class-8B">
    <Card className="text-center">
      <Card.Body>
       
        <Card.Text>
          <h2>CLASS-8(B)</h2>
         
        </Card.Text>
       
      </Card.Body>
    
    </Card>
    </Link>
    <Link to="/teacher/Class-9C">
    <Card className="text-center">
      <Card.Body>
       
        <Card.Text>
          <h2>CLASS-9(C)</h2>
         
        </Card.Text>
       
      </Card.Body>
    
    </Card>
 </Link>

    </div>
  )
}
