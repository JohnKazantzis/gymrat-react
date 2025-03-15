import React, { useState, useEffect} from "react";
import { getUser, updateUser } from '../services/userService';
import { useNavigate } from "react-router-dom";

export default function ProfilePanel(props) {
    // TODO fix form width, its too big

    // Init navigate hook
    const navigate = useNavigate();

    // State definition and data initial loading
    let id = 3;
    const [user, setUser] = useState({
        id: id,
        name: "",
        email: ""
    });
    useEffect(() => {
        getUser(id)
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
        <div className="box child-component-size mt-5" onSubmit={() => handleUserUpdate(user)}>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                <input className="input" name="name" value={user.name} type="text" onChange={handleInputChange}/>
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                <input className="input" name="email" value={user.email} type="text" onChange={handleInputChange}/>
                </div>
            </div>
            <button className="button is-primary" onClick={() => handleUserUpdate(user)}>Update</button>
            <button className="button is-danger" onClick={handleNavigate}>Logout</button>
        </div>
    );
}