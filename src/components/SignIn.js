import React, { useState } from "react";
import { signIn } from "../services/authService";
import { BAD_CREDENTIALS_CODE, SIGN_IN_BTN_STYLE } from "../constants";

export default function SignIn(props) {
    

    const [isloading, setIsLoading] = useState(false)
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const updateInput = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    }

    const authenticateUser = async (credentials) => {
        try {
            setIsLoading(true);
            const result = await signIn(credentials);
            console.log(result);
            props.finaliseAuth(
                result?.data?.accessToken, 
                {
                    id: result?.data?.id,
                    username: result?.data?.username,
                    email: result?.data?.email
                }
            );
            
        } catch(error) {
            console.log(error);
            if(error.status === BAD_CREDENTIALS_CODE) {
                console.log("Bad cred");
            }
        }
        finally {
            setIsLoading(false);
        }
    }

    return(
        <div className="box auth-form">
            <div className="title is-2 has-text-centered">Sign in...</div>
            <div className="field">
                <label className="label">Username</label>
                <div className="control">
                    <input 
                        value={credentials.username} 
                        name="username" 
                        onChange={(event) => updateInput(event)} 
                        className="input" 
                        type="text" 
                        placeholder="e.g. alexp" 
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input 
                        value={credentials.password}
                        name="password"
                        onChange={(event) => updateInput(event)}
                        className="input"
                        type="password" 
                        placeholder="**********" 
                    />
                </div>
            </div>
            <div className="is-flex is-justify-content-center">
                <button 
                    className={isloading ? SIGN_IN_BTN_STYLE.loading : SIGN_IN_BTN_STYLE.notLoading} 
                    onClick={() => authenticateUser(credentials)}
                    >Sign in
                </button>
                <button 
                    className="button is-danger ml-1 auth-btn" 
                    disabled={isloading}
                    onClick={props.toogleSignUp}
                >Sign up</button>
            </div>
        </div>
    );

}