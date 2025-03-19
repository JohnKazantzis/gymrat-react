import React, { useState } from "react";
import { SIGN_IN_BTN_STYLE } from "../constants";
import { signUp } from "../services/authService";

export default function SignUp(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const createUser = async (event, username, email, password) => {
        try {
            event.preventDefault();
            setIsLoading(true);
            await signUp({username, email, password});
            props.toogleSignUp();
        } catch(error) {
            console.log(error);            
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <form className="box auth-form-sign-up" onSubmit={(event) => createUser(event, username, email, password)}>
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
                    >Confirm
                </button>
                <button 
                    className="button is-danger ml-1 auth-btn" 
                    disabled={isLoading}
                    onClick={props.toogleSignUp}
                >Sign in</button>
            </div>
        </form>
    );

}