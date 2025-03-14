import React, { Fragment } from "react";

export default function SignIn() {

    return(
        <div className="box auth-form">
            <div className="title is-2 has-text-centered">Sign in...</div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                <input className="input" type="email" placeholder="e.g. alex@example.com" />
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                <input className="input" type="password" placeholder="********" />
                </div>
            </div>
            <div className="is-flex is-justify-content-center">
                <button className="button is-primary mr-1 auth-btn">Sign in</button>
                <button className="button is-danger ml-1 auth-btn">Sign up</button>
            </div>
        </div>
    );

}