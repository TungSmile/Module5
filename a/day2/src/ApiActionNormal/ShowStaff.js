import {useEffect, useState} from "react";
import axios from "axios";
import {Link, Outlet} from "react-router-dom";


const ShowStaff = () => {
    const [staffs, listStudent] = useState([]);
    // tạo 1 biến hứng dữ liệu khi call api, useState là là cú pháp mặc định trong axios;

    useEffect(() => {
        axios.get("http://localhost:8080/show").then(
            // then dùng khi api successful
            data => {
                listStudent(data.data)
            }
        ).catch(function (err) {
                console.log(err)
            }
            // catch dùng khi api fail

        ).finally(function () {
                console.log(" execute api show staff")
            }
            // finally dùng thực kiện kể cả khi successful or fail
        )
    }, []);
    // sử dụng useEffect(...,[]) thêm [] để hook đc render 1 lần
    // [] là để truyền tham số khi tham số thay đổi thì mới chạy


    return (<>
        <div className="container">
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
    </>);
}
export default ShowStaff;