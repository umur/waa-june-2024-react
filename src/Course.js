import React from "react";
import AddButtom from './AddButtom';
import './Table.css';

const App = () => {
    const data = [
        { name: "WAP", code: "CS544" },
        { name: "WAA", code: "CS526" },
        { name: "EA", code: "CS584" }
    ]

    return (

        <><h1>Course List</h1>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '5%' }}>
                <AddButtom />
            </div>
            <br />
            <div className="table-container">
                <table className="bordered-table">
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Action</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.code}</td>
                                <td></td>
                            </tr>
                        );
                    })}
                </table>
            </div >

        </>
    )
}

export default App;
