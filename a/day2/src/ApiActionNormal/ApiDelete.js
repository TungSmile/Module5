import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

const ApiDelete = () => {
    const navigate = useNavigate();
    const {id} = useParams();



    useEffect(() => {
        axios.post("http://localhost:8080/delete?id="+ id)
            .then(data => {
                console.log(data.data)
                navigate("/");
            })
            .catch(function (err) {
                console.log(err)
            })
    }, []);
}
export default ApiDelete