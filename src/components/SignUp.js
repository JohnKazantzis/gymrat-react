import React, { useState } from "react";
import { SIGN_IN_BTN_STYLE } from "../constants";
import { signUp } from "../services/authService";

export default function SignUp(props) {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const createUser = async (username, email, password) => {
        setIsLoading(true);
        await signUp({username, email, password});
        
    }

    return(
        <div className="box auth-form">
            <div className="title is-2 has-text-centered">Sign up...</div>
            <div className="field">
                <label className="label">Username</label>
                <div className="control">
                    <input 
                        value={username} 
                        name="username" 
                        onChange={(event) => setUsername(event?.target?.value)} 
                        className="input" 
                        type="text" 
                        placeholder="e.g. alexp" 
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input 
                        value={email} 
                        name="username" 
                        onChange={(event) => setEmail(event?.target?.value)} 
                        className="input" 
                        type="text" 
                        placeholder="e.g. alexp@gmail.com" 
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input 
                        value={password}
                        name="password"
                        onChange={(event) => setPassword(event.target.value)}
                        className="input"
                        type="password" 
                        placeholder="**********" 
                    />
                </div>
            </div>
            <div className="is-flex is-justify-content-center">
                <button 
                    className={isLoading ? SIGN_IN_BTN_STYLE.loading : SIGN_IN_BTN_STYLE.notLoading} 
                    onClick={() => createUser(username, email, password)}
                    >Confirm
                </button>
                <button 
                    className="button is-danger ml-1 auth-btn" 
                    disabled={isLoading}
                    onClick={props.toogleSignUp}
                >Sign in</button>
            </div>
        </div>
    );

}