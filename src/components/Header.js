import React, { useState } from "react";
import "../styles.css";
import "bulma/css/bulma.css";
import { Link } from "react-router-dom";

export default function Header() {

    const [tabsClasses, setTabsClasses] = useState({
        stats: true,
        workouts: false,
        admin: false
    });


    return(
        <div className="is-flex is-flex-direction-row is-justify-content-space-between header-size">
            <figure className="image is-48x48">
                <img src="/dumbbell-white.png" alt="KG" />
            </figure>
            <div className="tabs is-medium tab-colors tab-colors">
                <ul>
                    <li className={tabsClasses.stats ? "is-active" : ""} onClick={() => {setTabsClasses({stats: true, workouts: false, admin: false})}}><Link to="/">Stats</Link></li>
                    <li className={tabsClasses.workouts ? "is-active" : ""} onClick={() => {setTabsClasses({stats: false, workouts: true, admin: false})}}><Link to="/workouts">Workouts</Link></li>
                    <li className={tabsClasses.admin ? "is-active" : ""} onClick={() => {setTabsClasses({stats: false, workouts: false, admin: true})}}><Link to="/admin">Admin Panel</Link></li>
                </ul>
            </div>
            <figure className="image is-48x48 is-clickable">
                <img src="/account.png" alt="KG" />
            </figure>
        </div>
    );
}