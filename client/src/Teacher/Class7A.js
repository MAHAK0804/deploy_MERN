
import React, { useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function Class7A() {
  const [students, setStudents] = useState([]);
  const [isAbsent, setIsAbsent] = useState(false);
  const [isPresent, setIsPresent] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('https://vidhyaghar-project-api.vercel.app/teacher/Class-7A');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://vidhyaghar-project-api.vercel.app/teacher/Class-7A', { isAbsent, isPresent });
      alert('Attendance marked successfully!');
      setIsAbsent(false);
      setIsPresent(false);
    } catch (error) {
      console.error('Error marking attendance:', error);
      alert('Failed to mark attendance. Please try again.');
    }
  };

  return (
    <div>
      <h1>Mark Student Attendance</h1>
      <form onSubmit={handleSubmit}>
        <Table striped="columns">
          <thead>
            <tr>
              <th>S No.</th>
              <th>Registration No.</th>
              <th>Name</th>
              <th>Attendence</th>
            </tr>
          </thead>
          <tbody>
             {students.map((student,id) => (
          <tr key={id}>
             <td>1</td>
           <td>
            {student.id}
           </td>
           <td>
            {student.name}
           </td>
              <td>
                <label>
                  Absent:
                  <input
                    type="radio"
                    name='attend 1'
                    checked={isAbsent}
                    onChange={(e) => setIsAbsent(e.target.checked)}
                  />
                </label>
                <label>
                  Present:
                  <input
                    type="radio"
                    name='attend 1'
                    checked={isPresent}
                    onChange={(e) => setIsPresent(e.target.checked)}
                  />
                </label>
              </td>
              </tr>
                   ))}
           
            {/* <tr>
              <td>2</td>
              <td>ST@02</td>
              <td>Mark</td>
              <td>
                <label>
                  Absent:
                  <input
                    type="radio"
                    name='attend 2'
                    checked={isAbsent}
                    onChange={(e) => setIsAbsent(e.target.checked)}
                  />
                </label>
                <label>
                  Present:
                  <input
                    type="radio"
                    name='attend 2'
                    checked={isPresent}
                    onChange={(e) => setIsPresent(e.target.checked)}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>ST@03</td>
              <td>Smith</td>
              <td>
                <label>
                  Absent:
                  <input
                    type="radio"
                    name='attend 3'
                    checked={isAbsent}
                    onChange={(e) => setIsAbsent(e.target.checked)}
                  />
                </label>
                <label>
                  Present:
                  <input
                    type="radio"
                    name='attend 3'
                    checked={isPresent}
                    onChange={(e) => setIsPresent(e.target.checked)}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>ST@04</td>
              <td>John</td>
              <td>
                <label>
                  Absent:
                  <input
                    type="radio"
                    name='attend 4'
                    checked={isAbsent}
                    onChange={(e) => setIsAbsent(e.target.checked)}
                  />
                </label>
                <label>
                  Present:
                  <input
                    type="radio"
                    name='attend 4'
                    checked={isPresent}
                    onChange={(e) => setIsPresent(e.target.checked)}
                  />
                </label>
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td>ST@05</td>
              <td>Hari</td>
              <td>
                <label>
                  Absent:
                  <input
                    type="radio"
                    name='attend 5'
                    checked={isAbsent}
                    onChange={(e) => setIsAbsent(e.target.checked)}
                  />
                </label>
                <label>
                  Present:
                  <input
                    type="radio"
                    name='attend 5'
                    checked={isPresent}
                    onChange={(e) => setIsPresent(e.target.checked)}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>ST@06</td>
              <td>Mahi</td>
              <td>
                <label>
                  Absent:
                  <input
                    type="radio"
                    name='attend 6'
                    checked={isAbsent}
                    onChange={(e) => setIsAbsent(e.target.checked)}
                  />
                </label>
                <label>
                  Present:
                  <input
                    type="radio"
                    name='attend 6'
                    checked={isPresent}
                    onChange={(e) => setIsPresent(e.target.checked)}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>ST@07</td>
              <td>Ruhu</td>
              <td>
                <label>
                  Absent:
                  <input
                    type="radio"
                    name='attend 7'
                    checked={isAbsent}
                    onChange={(e) => setIsAbsent(e.target.checked)}
                  />
                </label>
                <label>
                  Present:
                  <input
                    type="radio"
                    name='attend 7'
                    checked={isPresent}
                    onChange={(e) => setIsPresent(e.target.checked)}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>ST@08</td>
              <td>Geet</td>
              <td>
                <label>
                  Absent:
                  <input
                    type="radio"
                    name='attend 8'
                    checked={isAbsent}
                    onChange={(e) => setIsAbsent(e.target.checked)}
                  />
                </label>
                <label>
                  Present:
                  <input
                    type="radio"
                    name='attend 8'
                    checked={isPresent}
                    onChange={(e) => setIsPresent(e.target.checked)}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>ST@09</td>
              <td>Kasi</td>
              <td>
                <label>
                  Absent:
                  <input
                    type="radio"
                    name='attend 9'
                    checked={isAbsent}
                    onChange={(e) => setIsAbsent(e.target.checked)}
                  />
                </label>
                <label>
                  Present:
                  <input
                    type="radio"
                    name='attend 9'
                    checked={isPresent}
                    onChange={(e) => setIsPresent(e.target.checked)}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>ST@10</td>
              <td>David</td>
              <td>
                <label>
                  Absent:
                  <input
                    type="radio"
                    name='attend 10'
                    checked={isAbsent}
                    onChange={(e) => setIsAbsent(e.target.checked)}
                  />
                </label>
                <label>
                  Present:
                  <input
                    type="radio"
                    name='attend 10'
                    checked={isPresent}
                    onChange={(e) => setIsPresent(e.target.checked)}
                  />
                </label>
              </td>
            </tr> */}
          </tbody>
        </Table>


        <button class="btn btn-outline-success" type="submit">Submit Attendance</button>
      </form>
    </div>
  );
}

export default Class7A;
