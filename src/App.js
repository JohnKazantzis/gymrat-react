import Header from "./components/Header";
import Stats from "./components/Stats"
import Workouts from "./components/Workouts"
import AdminPanel from "./components/AdminPanel"
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="is-flex is-flex-direction-row is-justify-content-center core-size page-color">
            <div>
                <Router>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<Stats></Stats>}></Route>
                        <Route path="/workouts" element={<Workouts></Workouts>}></Route>
                        <Route path="/admin" element={<AdminPanel></AdminPanel>}></Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
