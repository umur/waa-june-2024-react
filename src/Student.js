import React from "react";
import AddButtom from './AddButtom';
import './Table.css';

const App = () => {
    const data = [
        { fname: "Anom", lname: "Pa", email: "aa@gmail.com", major: "MM", gpa: 4 },
        { fname: "Penon", lname: "Sa", email: "bb@gmail.com", major: "MM", gpa: 4.1 },
        { fname: "Tom", lname: "Ga", email: "cc@gmail.com", major: "MM", gpa: 3.8 }
    ]

    return (
        <><h1>Student List</h1>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '5%' }}>
                <AddButtom />
            </div>
            <br />
            <div className="table-container">
                <table className="bordered-table">
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Major</th>
                        <th>GPA</th>
                        <th>Action</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.fname}</td>
                                <td>{val.lname}</td>
                                <td>{val.email}</td>
                                <td>{val.major}</td>
                                <td>{val.gpa}</td>
                                <td></td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </>
    )
}

export default App;
