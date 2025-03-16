import React from "react"
import "../styles.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function AuthenticationPanel(props) {

    let signUpBtnPressed = false;
    
    return(
        <div className="auth-wrapper core-size is-flex">
            <div className="auth-child auth-side is-flex is-flex-direction-column">
                <div className="auth-logo is-flex is-justify-content-space-evenly is-align-items-center">
                    <figure className="image is-64x64">
                        <img src="/dumbbell-white.png" alt="KG" />
                    </figure>
                    <h1 className="is-inline-block title is-5">Gymrat</h1>
                </div>
                <div className="auth-side is-flex is-justify-content-center is-align-items-center">
                    {signUpBtnPressed ? <SignUp></SignUp> : <SignIn finaliseAuth={props.finaliseAuth}></SignIn>}
                </div>
            </div>
            <div className="auth-child image-side">
            </div>
            
        </div>
    );

}