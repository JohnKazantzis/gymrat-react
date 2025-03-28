import React, { useState } from "react";
import "../styles.css";
import { Link, useLocation } from "react-router-dom";
import { STATS_PATH, WORKOUTS_PATH, ADMIN_PATH } from "../constants";

export default function Header() {
    const { pathname } = useLocation();
    
    const [tabsClasses, setTabsClasses] = useState({
        stats: pathname == STATS_PATH,
        workouts: pathname == WORKOUTS_PATH,
        admin: pathname == ADMIN_PATH
    });

    const updateClasses = (stats, workouts, admin) => {
        setTabsClasses({
            stats: stats,
            workouts: workouts,
            admin: admin
        });
    }


    return(
        <div className="is-flex is-flex-direction-row is-justify-content-space-between child-component-size">
            <figure className="image is-48x48">
                <img src="/dumbbell-white.png" alt="KG" />
            </figure>
            <div className="tabs is-medium tab-colors tab-colors">
                <ul>
                    <li className={tabsClasses.stats ? "is-active" : ""} onClick={() => {updateClasses(true, false, false)}}><Link to="/">Stats</Link></li>
                    <li className={tabsClasses.workouts ? "is-active" : ""} onClick={() => {updateClasses(false, true, false)}}><Link to="/workouts">Workouts</Link></li>
                    <li className={tabsClasses.admin ? "is-active" : ""} onClick={() => {updateClasses(false, false, true)}}><Link to="/admin">Admin Panel</Link></li>
                </ul>
            </div>
            <Link to="/profile">
                <figure className="image is-48x48 is-clickable" onClick={() => {updateClasses(false, false, false)}}>
                    <img src="/account.png" alt="KG" />
                </figure>
            </Link>
        </div>
    );
}