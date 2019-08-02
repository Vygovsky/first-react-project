import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (<div className="app-wrapper">
        <BrowserRouter>
            <Nav/>
            <Header/>
            <div className="app-wrapper-content">
                <Route  path={'/dialogs'} component={Dialogs}/>
                <Route path={'/profile'} component={Profile}/>
            </div>
        </BrowserRouter>

    </div>);
}
export default App;