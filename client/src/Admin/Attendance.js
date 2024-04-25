import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import './Attend.css';
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
              <Link to="/admin/dashboard">  <button type="button" class="list-group-item list-group-item-action" aria-current="true">
                <i class="fa fa-book"></i>Dashboard
              </button></Link>
              <br />
              <Link to="/admin/attendance">
                <button type="button" class="list-group-item list-group-item-action">
                  <i class='fa fa-calendar'></i>Attendance
                </button></Link>
              <br />

              <Link to="/admin/notice">
                <button type="button" class="list-group-item list-group-item-action">
                  <i class="fa fa-sticky-note"></i>Notice</button></Link>
              <br />

              <Link to="/admin/complain">  <button type="button" class="list-group-item list-group-item-action"><i class="fa fa-exclamation"></i>Complain</button></Link>
            </div>
          </div>
        </div>
      </nav>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Nursery-class</Accordion.Header>
          <Accordion.Body>


            <Card className="text-center">
              <Card.Body>
                <div className='piechart'>
                  <div className='box'>
                    Attendance
                  </div>
                  NURSERY CLASS ATTENDANCE
                </div>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>LKG-class</Accordion.Header>
          <Accordion.Body>

            <Card className="text-center">
              <Card.Body>
                <div className='piechart'>
                  <div className='box'>
                    Attendance
                  </div>
                  LKG CLASS ATTENDANCE
                </div>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>UKG-class</Accordion.Header>
          <Accordion.Body>

            <Card className="text-center">
              <Card.Body>
                <div className='piechart'>
                  <div className='box'>
                    Attendance
                  </div>
                  UKG CLASS ATTENDANCE
                </div>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>1st-class</Accordion.Header>
          <Accordion.Body>

            <Card className="text-center">
              <Card.Body>
                <div className='piechart'>
                  <div className='box'>
                    Attendance
                  </div>
                  1st CLASS ATTENDANCE
                </div>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>2nd-class</Accordion.Header>
          <Accordion.Body>

            <Card className="text-center">
              <Card.Body>
                <div className='piechart'>
                  <div className='box'>
                    Attendance
                  </div>
                  2nd CLASS ATTENDANCE
                </div>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>3rd-class</Accordion.Header>
          <Accordion.Body>

            <Card className="text-center">
              <Card.Body>
                <div className='piechart'>
                  <div className='box'>
                    Attendance
                  </div>
                  3rd CLASS ATTENDANCE
                </div>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>4th-class</Accordion.Header>
          <Accordion.Body>

            <Card className="text-center">
              <Card.Body>
                <div className='piechart'>
                  <div className='box'>
                    Attendance
                  </div>
                  4th CLASS ATTENDANCE
                </div>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>5th-class</Accordion.Header>
          <Accordion.Body>

            <Card className="text-center">
              <Card.Body>
                <div className='piechart'>
                  <div className='box'>
                    Attendance
                  </div>
                  5th CLASS ATTENDANCE
                </div>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header>6th-class</Accordion.Header>
          <Accordion.Body>

            <Card className="text-center">
              <Card.Body>
                <div className='piechart'>
                  <div className='box'>
                    Attendance
                  </div>
                  6th CLASS ATTENDANCE
                </div>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header>7th-class</Accordion.Header>
          <Accordion.Body>

            <Card className="text-center">
              <Card.Body>
                <div className='piechart'>
                  <div className='box'>
                    Attendance
                  </div>
                  7th CLASS ATTENDANCE
                </div>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10">
          <Accordion.Header>8th-class</Accordion.Header>
          <Accordion.Body>

            <Card className="text-center">
              <Card.Body>
                <div className='piechart'>
                  <div className='box'>
                    Attendance
                  </div>
                  8th CLASS ATTENDANCE
                </div>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="11">
          <Accordion.Header>9th-class</Accordion.Header>
          <Accordion.Body>

            <Card className="text-center">
              <Card.Body>
                <div className='piechart'>
                  <div className='box'>
                    Attendance
                  </div>
                  9th CLASS ATTENDANCE
                </div>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="12">
          <Accordion.Header>10th-class</Accordion.Header>
          <Accordion.Body>

            <Card className="text-center">
              <Card.Body>
                <div className='piechart'>
                  <div className='box'>
                    Attendance
                  </div>
                  10th CLASS ATTENDANCE
                </div>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="13">
          <Accordion.Header>11th-class</Accordion.Header>
          <Accordion.Body>

            <Card className="text-center">
              <Card.Body>
                <div className='piechart'>
                  <div className='box'>
                    Attendance
                  </div>
                  11th CLASS ATTENDANCE
                </div>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="14">
          <Accordion.Header>12th-class</Accordion.Header>
          <Accordion.Body>

            <Card className="text-center">
              <Card.Body>
                <div className='piechart'>
                  <div className='box'>
                    Attendance
                  </div>
                  12th CLASS ATTENDANCE
                </div>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>



      </Accordion>



    </div>
  )
}
