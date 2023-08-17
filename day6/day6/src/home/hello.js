import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Hello() {
    const [staffs, listStudent] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/show").then(
            data => {
                listStudent(data.data)
            }
        ).catch(
            function (err) {
                console.log(err)
            }
        )
    }, []);

    return (<>
        <div className="col-10">
            <h2>Staff List</h2>
            <Link to={"/create"}>
                <button>Create</button>
            </Link>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>id</th>
                    <th>code</th>
                    <th>name</th>
                    <th>age</th>
                    <th>salary</th>
                    <th>department</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {staffs.map((s) => {
                    return (
                        <tr>
                            <td>{s.id}</td>
                            <td>{s.code}</td>
                            <td>{s.name}</td>
                            <td>{s.age}</td>
                            <td>{s.salary}</td>
                            <td>{s.department.name}</td>
                            <td>
                                <Link to={"/edit/" + s.id}>
                                    <button type="button" className="btn btn-warning">Edit</button>
                                </Link>
                            </td>
                            <td>
                                <Link to={"/delete/" + s.id}>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })
                }
                </tbody>
            </table>
        </div>
    </>)
}