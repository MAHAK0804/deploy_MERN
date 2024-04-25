import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Notice.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Notice() {
  const [input, setInput] = useState({
    notice:''
  });


  function handleChange(event) {
    const { name, value } = event.target;
    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }
  const navigate = useNavigate();


  function handleClick(event) {
    // event.preventDefalut();
    const details2 = {
      notice: input.notice,

    }
    axios.post('/admin/noitce', details2)
    navigate("/admin/notice");

  };

  
  return (
    <>
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



      <Card className="text-center">
        <Card.Header>NOTICE</Card.Header>
        <Card.Body>
          <form method='post' validate action='http://localhost:3000/admin/notice'>
            <textarea class="form-control" id="Textarea1" rows="8" name="notice" value={input.notice} onChange={handleChange} ></textarea>
            <br />
            <Button variant="primary" type="submit" value='submit' onClick={handleClick}><i class="fa fa-send"></i>Send</Button>
          </form>
        </Card.Body>

      </Card>
    </>
  )
}
