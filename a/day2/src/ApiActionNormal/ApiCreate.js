import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const CreateStaff = () => {
    const [staff, setStaff] = useState({id: 0, code: "", name: "", age: "", salary: "", department: {id: 1}});
    // tạo biến khung để truyền , id mặc định là 0
    const [idBranch, setIdBranch] = useState(1);
    const [branch, listDepartment] = useState([]);

    // biến bắt đối tượng department
    const navigate = useNavigate();
    // điều hướng đến route

    useEffect(() => {
        axios.get("http://localhost:8080/showDepartment").then(
            data => {
                listDepartment(data.data)
            }
        ).catch(function (err) {
                console.log(err)
            }
        ).finally(function () {
                console.log(" execute api show staff")
            }
        )
    }, []);


    const handleInputChange = (parameters) => {
        const {name, value} = parameters.target;
        // tạo biến bắt các giá trị ô input
        setStaff({...staff, [name]: value});
        // name phải có [] để name sẽ là name trong thẻ input
    };

    const handleInputChangeIdBranch = (parameters) => {
        setIdBranch(parameters.target.value);
    }
    // truyền staff có department là 1 đối tượng nên phải tạo thêm function arrow để bắt

    const create = () => {
       let data1= {...staff, department: {id: idBranch}};
       // bất đồng bộ nên phải tạo biến để nhận lúc thời điểm đó , ko dùng set
        axios.post("http://localhost:8080/create", data1)
            .then(data => {
                console.log(data)
                navigate("/");
            })
            .catch(function (err) {
                console.log(err)
            })

    }

    return (
        <div className="container">
            <h2>Create Staff</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Code Staff</th>
                    <th><input name="code" onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th><input name="name" onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>Age</th>
                    <th><input name="age" onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>Salary</th>
                    <th><input name="salary" onChange={handleInputChange}/></th>
                </tr>

                <tr>
                    <th>Branch</th>
                   <th> <select onChange={handleInputChangeIdBranch}>
                        {branch.map((s) => {
                            return (<option value={s.id}>{s.name}</option>)})
                        }
                    </select>
                   </th>
                </tr>
                <button onClick={create}>Create</button>
                </thead>
            </table>
        </div>)
}
export default CreateStaff