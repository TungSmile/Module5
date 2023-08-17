import {Link, Outlet, Route} from "react-router-dom";
import ProductPage from "./ProductPage";
import OrderPage from "./OrderPage";

const AdminPage =()=>{
    return (
        <><Link to={'product'}>Product</Link>
            <Link to={'order'}>Order</Link><br/>
            <Outlet></Outlet></>
    )
}
export default AdminPage;