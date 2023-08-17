import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import async from "async";

const ApiEdit = () => {
    const [staff, setStaff] = useState({id: 0, code: "", name: "", age: "", salary: "", department: {id: 1}});
    const [branches, setBranches] = useState([]);
    const [idBranch, setIdBranch] = useState(1);
    const navigate = useNavigate();
    const {id} = useParams();
    // biến để truyền id lên param lên url
    useEffect(() => {
        axios.get("http://localhost:8080/detail?id=" + id)
            .then(data => {
                // console.log(data.data)
                setStaff(data.data);
                setIdBranch(data.data.department.id)
                // để xử lý bất đồng bộ của axios thì lồng vào trong nhau là dễ nhất
                axios.get("http://localhost:8080/showDepartment")
                    .then(data => {
                        // console.log(data.data)
                        setBranches(data.data);

                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
            .catch(function (err) {
                console.log(err)
            })
    }, []);

    // useEffect dùng để render lần đầu kèm truyền id data cho biến
    const handleInputChange = (parameters) => {
        const {name, value} = parameters.target;
        setStaff({...staff, [name]: value});
    };

    const handleInputChangeIdBranch = (parameters) => {
        const value = parameters.target.value;
        setIdBranch(value);
    }
    const edit = () => {
        let a = {...staff, department: {id: idBranch}};
        console.log(a)
        axios.post("http://localhost:8080/create", a)
            .then(data => {
                console.log(data)
                navigate("/");
                // navigate ném đến path:"/"

            })
            .catch(function (err) {
                console.log(err)
            })
    }

    return (
        <div className="container">
            <h2>Edit Staff</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Code Staff</th>
                    <th><a>{staff.id}</a></th>
                </tr>
                <tr>
                    <th>Code Staff</th>
                    <th><input name="code" value={staff.code} onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th><input name="name" value={staff.name} onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>Age</th>
                    <th><input name="age" value={staff.age} onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>Salary</th>
                    <th><input name="salary" value={staff.salary} onChange={handleInputChange}/></th>
                </tr>

                <tr>
                    <th>IdBranch</th>
                    <th><select name="idBranch1" onChange={handleInputChangeIdBranch}>
                        {branches.map((s) => {
                            if (s.id === staff.department.id) {
                                return (<option selected="selected" value={s.id}>{s.name}</option>)
                                // chưa hiểu sao return rồi vẫn chạy đc
                            }
                            return (<option value={s.id}>{s.name}</option>)
                        })
                        }
                    </select></th>
                </tr>
                <button onClick={edit}>Edit</button>
                </thead>
            </table>
        </div>
    )
}
export default ApiEdit;