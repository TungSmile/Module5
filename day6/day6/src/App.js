import './App.css';
import {BrowserRouter as ListRoute, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Resgiter from "./Resgiter";
import Admin from "./adminpage/admin";
import Home from "./home/home";
import Order from "./adminpage/order";
import Product from "./adminpage/product";
import Detail from "./home/Detail";
import HomePage from "./HomePage";
import Hello from "./home/hello";
import Homepage from "./exam/homepage";
import Create from "./exam/create";

function App() {
    return (<>
            {/*<ListRoute>*/}
            {/*    <Routes>*/}
            {/*        <Route path="" element={<HomePage/>}/>*/}
            {/*        <Route path="register" element={<Resgiter/>}/>*/}
            {/*        <Route path="login" element={<Login/>}/>*/}
            {/*        <Route path="admin" element={<Admin/>}>*/}
            {/*            <Route path="order" element={<Order/>}/>*/}
            {/*            <Route path="product" element={<Product/>}/>*/}
            {/*        </Route>*/}
            {/*        <Route path="home" element={<Home/>}>*/}
            {/*            <Route path="detail" element={<Detail/>}/>*/}
            {/*            <Route path="hello" element={<Hello/>}/>*/}

            {/*        </Route>*/}
            {/*    </Routes>*/}
            {/*</ListRoute>*/}
            <ListRoute>
                <Routes>
                <Route path="" element={<Homepage/>} >
                    <Route path="create" element={<Create/>} />
                </Route>
                </Routes>
            </ListRoute>

        </>
    );
}

export default App;
