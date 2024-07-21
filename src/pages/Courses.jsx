import React from 'react';
import './Courses.css';

const Courses = () => {
  const courses = [
    { department: 'Information Technology', count: 60 },
    { department: 'AIDS', count: 120 },
    { department: 'ECE', count: 300 },
    { department: 'AI&IOT', count: 110 },
    { department: 'Medical Electronic', count: 102 },
    { department: 'BME', count: 50 },
    { department: 'EEE', count: 80 },
    { department: 'MECH', count: 60 },
    { department: 'EIE', count: 90 },
    { department: 'AIML', count: 110 },
    { department: 'AICS', count: 80 },
    { department: 'CSE', count: 200 },
  ];

  return (
    <div>
      <h1>Courses Offered</h1>
      <table>
        <thead>
          <tr>
            <th>Department</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.department}</td>
              <td>{course.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;