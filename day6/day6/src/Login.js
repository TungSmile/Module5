import {Link, Outlet} from "react-router-dom";

export default function Login(){
return(<>
        <div className="row">
            <div className="col-10">
                <Link to={'/home'}>User</Link>
                <Link to={'/admin'}>Admin</Link>
            </div>
        </div>
    <Outlet></Outlet></>
)

}