import React, { useState, useEffect} from "react";
import { getUser, updateUser } from '../services/userService';
import { useNavigate } from "react-router-dom";

export default function ProfilePanel(props) {
    // TODO fix form width, its too big

    // Init navigate hook
    const navigate = useNavigate();

    // State definition and data initial loading
    const id = JSON.parse(sessionStorage.getItem("userData"))?.id;
    const [user, setUser] = useState({
        id: id,
        username: "",
        email: ""
    });
    useEffect(() => {
        getUser(user.id)
        .then(result => {
            setUser(result?.data);
        })
        .catch(error => console.log(error));
    }, []);

    // Dynamic input value change handler
    const handleInputChange = event => {        
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });        
    }

    // API Request to update user data
    const handleUserUpdate = (user) => {
        updateUser(user)
        .then(result => {
            console.log("User Updated: ", result);
        })
        .catch(error => {
            console.log("Error: ", error)
        });
    }

    const handleNavigate = () => {
        props.logout();
        navigate("/");
    }

    return(
        <div className="box profile-panel-size mt-5" onSubmit={() => handleUserUpdate(user)}>
            <div className="field">
                <label className="label">Username</label>
                <div className="control">
                <input className="input" name="username" value={user.username} type="text" onChange={handleInputChange}/>
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                <input className="input" name="email" value={user.email} type="text" onChange={handleInputChange}/>
                </div>
            </div>
            <div className="is-flex is-justify-content-center">
                <button className="button is-primary mr-1 profile-btn" onClick={() => handleUserUpdate(user)}>Update</button>
                <button className="button is-danger ml-1 profile-btn" onClick={handleNavigate}>Logout</button>                
            </div>
        </div>
    );
}