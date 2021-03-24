import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./signIn.styles.scss";
import { signInWithGoogle, auth } from "../../firebase/firebase.util";

class SignIn extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState ({ email: '', password: '' })
        } catch (error) {
            console.log(error.nessage);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className="sign-in">
                <h2 className="title">Already have an account</h2>
                <p>Sign in with your email and password</p>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email"
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="email"
                    />

                    <FormInput
                        type="password" 
                        name="password"
                        label="password"
                        value={this.state.password} 
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <CustomButton type="submit" >sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{" "}sign in with Google{" "}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;