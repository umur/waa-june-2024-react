import React from 'react';

export function Course(props) {
    //return table with course name and course code and table show in center

    return (
        
        <table>
            <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Code</th>
          </tr>
          </thead>
          <tbody>
            <tr key={props.id}>
              <td>{props.name}</td>
              <td>{props.code}</td>
            </tr>
          </tbody>
        </table>
        
    );
}

