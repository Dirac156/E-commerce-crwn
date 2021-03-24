import React from "react";

import {Switch, Route, Redirect} from "react-router-dom";

import HomePage from "./pages/HomePage/homepage.component";
import ShopPage from "./pages/ShopPage/shopPage.component";
import SignInSignUp from "./pages/sign-in-sign-up-page/sign-in-sign-up-page.component";
import Header from "./components/Header/Header.component";
import CheckoutPage from "./pages/checkoutPage/checkout.component";
import { auth, creatUserProfilDocument } from "./firebase/firebase.util";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";

import {createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selectors";

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){

    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await creatUserProfilDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            })
          }, () => {
            console.log("state", this.state);
          })
      } 
      setCurrentUser( userAuth );
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component = {ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route 
          exact path="/signInSignUp" 
          render = {() => this.props.currentUser ? 
          <Redirect to = "/" /> 
          : 
          <SignInSignUp />
        }
        />
      </Switch>
      </div>
    );
  }
  
}

const mapStatetoProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStatetoProps, mapDispatchToProps)(App);
