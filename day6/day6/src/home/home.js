import {Link, Outlet} from "react-router-dom";


export default function Home() {
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to={'detail'}>Create</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'hello'}>ShowList</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    </>)

}