import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Header from "./components/Header";
import Stats from "./components/Stats"
import Workouts from "./components/Workouts"
import AdminPanel from "./components/AdminPanel"
import ProfilePanel from "./components/ProfilePanel"
import SignUp from "./components/SignUp"
import AuthenticationPanel from "./components/AuthenticationPanel"
import "./styles.css";

// TODO Dont let the user navigate to other app urls when he is not logged in

function App() {    
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState({});
    useEffect(() => {
        let accessToken = sessionStorage.getItem("accessToken");
        if(accessToken && jwtDecode(accessToken)?.exp > (Date.now() / 1000)) {
            setIsAuthenticated(true);
            setUserData(JSON.parse(sessionStorage.getItem("userData")));
        }
    },[]);

    const finaliseAuth = (token, tempUserData) => {
        console.log("token: ", token);
        sessionStorage.setItem("accessToken", token);
        sessionStorage.setItem("userData", JSON.stringify(tempUserData));
        setIsAuthenticated(true);
        setUserData(tempUserData);
    }

    const logout = () => {
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("userData");
        setIsAuthenticated(false);
        setUserData({});
    }

    return (
        <div className="is-flex is-flex-direction-row is-justify-content-center core-size page-color">
            <div>
                <Router>
                    {isAuthenticated ? <Header></Header> : <></>}
                    <Routes>
                        <Route 
                            path="/" 
                            element={isAuthenticated ? <Stats></Stats> : <AuthenticationPanel finaliseAuth={finaliseAuth}></AuthenticationPanel>}
                        ></Route>
                        <Route path="/workouts" element={<Workouts></Workouts>}></Route>
                        <Route path="/admin" element={<AdminPanel></AdminPanel>}></Route>
                        <Route path="/profile" element={<ProfilePanel logout={logout} id={userData?.id}></ProfilePanel>}></Route>
                        <Route path="/signup" element={<SignUp></SignUp>}></Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
