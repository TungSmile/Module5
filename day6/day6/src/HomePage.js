import {Link, Outlet} from "react-router-dom";

export default function HomePage() {
    return (<>
        <div className="row">
            <div className="col-10">
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
            </div>
        </div>
        <Outlet></Outlet>
    </>)
}