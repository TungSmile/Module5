import {useEffect, useState} from "react";
import axios from "axios";

export default function ShowAll() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/products").then(
            data => {
                setProduct(data.data);
            }
        ).catch(function (err) {
            console.log(err)
        })
    }, []);
    return (<>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>price</th>
                    <th>description</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {products.map((p) => {
                    return (
                        <tr>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                            <td>{p.price}</td>
                            <td>{p.description}</td>
                            <td>
                                {/*<Link to={"/edit/" + p.id}>*/}
                                {/*    <button type="button" className="btn btn-warning">Edit</button>*/}
                                {/*</Link>*/}
                                {/*<Link to={"/delete/" + p.id}>*/}
                                {/*    <button type="button" className="btn btn-danger">Delete</button>*/}
                                {/*</Link>*/}
                            </td>
                        </tr>
                    )
                })
                }
                </tbody>
            </table>
        </>

    )
}