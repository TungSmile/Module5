import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import ShowStaff from "./ApiActionNormal/ShowStaff";
import ApiCreate from "./ApiActionNormal/ApiCreate";
import ApiEdit from "./ApiActionNormal/ApiEdit";
import ApiDelete from "./ApiActionNormal/ApiDelete";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter><App></App></BrowserRouter>

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ShowStaff/>}/>
            <Route path="/create" element={<ApiCreate/>}/>
            <Route path="/edit/:id" element={<ApiEdit/>}/>
            <Route path="/delete/:id" element={<ApiDelete/>}/>
        </Routes>
    </BrowserRouter>
);
// React.StrictMode dễ lỗi
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
