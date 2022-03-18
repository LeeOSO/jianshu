import React from "react";
import Header from "./common/header";
import Provider from "react-redux/lib/components/Provider";
import store from "./store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
// import DetailComp from "./pages/detail/index";
import {Navigate, useParams} from "react-router";
import Login from "./pages/login";
import Write from "./pages/write";

function App() {

    return (
        //将store提供给子组件
        <Provider store={store}>
            <BrowserRouter>
                {/*使用Link组件必须放在内部*/}
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/write' element={<Write/>}/>
                    {/* /detail/:id->动态路由匹配参数   '/detail/' + item.get('id')*/}
                    <Route path='/detail/:id' element={<Detail/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
