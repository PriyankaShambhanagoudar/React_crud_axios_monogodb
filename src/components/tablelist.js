import React from "react";

import "./TableList.css";

const Tablelist = (props) => {

    return (
        <div>
            <h1>Table List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {props.dataList.map((data, i) => {

                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>   {data.FirstName}</td>
                                <td> {data.LastName}</td>
                                <td>
                                    <button onClick={() => props.deleteId(data._id)}> Delete</button>

                                </td>
                                <td>
                                    <button onClick={() => props.editId(data)} >Edit</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    );
};

export default Tablelist;
