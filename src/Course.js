import React from 'react';

export function Course(props) {

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

