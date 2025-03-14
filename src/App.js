import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats"
import Workouts from "./components/Workouts"
import AdminPanel from "./components/AdminPanel"
import ProfilePanel from "./components/ProfilePanel"
import SignUp from "./components/SignUp"
import AuthenticationPanel from "./components/AuthenticationPanel"
import "./styles.css";

function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div className="is-flex is-flex-direction-row is-justify-content-center core-size page-color">
            <div>
                <Router>
                    {isAuthenticated ? <Header isAuthenticated={isAuthenticated}></Header> : <></>}
                    <Routes>
                        <Route path="/" element={isAuthenticated ? <Stats></Stats> : <AuthenticationPanel></AuthenticationPanel>}></Route>
                        <Route path="/workouts" element={<Workouts></Workouts>}></Route>
                        <Route path="/admin" element={<AdminPanel></AdminPanel>}></Route>
                        <Route path="/profile" element={<ProfilePanel></ProfilePanel>}></Route>
                        <Route path="/signup" element={<SignUp></SignUp>}></Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
