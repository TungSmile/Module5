import './App.css';
import {BrowserRouter as Router, Link, Outlet, Route, Routes} from 'react-router-dom';
// do ShowStaff dùng useEffect nên sau path chỉ có / nên phải dùng Browser để nhận router;
import ShowStaff from "./ApiActionNormal/ShowStaff";
import ApiCreate from "./ApiActionNormal/ApiCreate";
import ApiEdit from "./ApiActionNormal/ApiEdit";
import AdminPage from "./testOutlet/AdminPage";
import ProductPage from "./testOutlet/ProductPage";
import OrderPage from "./testOutlet/OrderPage";
import UserPage from "./testOutlet/UserPage";


export default function App() {
    return (
        <div className="App">
            <Link to={'admin'}>Admin</Link>
            <Link to={'user'}>User</Link><br/>
            <Routes>
                <Route path={'admin'} element={<AdminPage/>}>
                    <Route path={'product'} element={<ProductPage/>}></Route>
                    <Route path={'order'} element={<OrderPage/>}></Route>
                </Route>
                <Route path={'user'} element={<UserPage/>}></Route>
            </Routes>
        </div>
    );
}
// dùng component = thẻ <Demo> là 1 component

