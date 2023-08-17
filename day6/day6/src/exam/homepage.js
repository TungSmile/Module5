import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Homepage() {


    return (<>
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <ul className="nav flex-column" >
                        <li className="nav-item">
                            <Link to={'create'}>Create</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>)
}