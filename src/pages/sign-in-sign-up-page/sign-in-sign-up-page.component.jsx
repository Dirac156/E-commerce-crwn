import React from "react";
import SignUp from "../../components/sign-up/sign-up.component";

import SignIn from "../../components/signIn/signIn.component";

import "./sign-in-sign-up-page.styles.scss";

const signInSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default signInSignUpPage;