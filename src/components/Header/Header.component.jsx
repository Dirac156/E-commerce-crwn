import React from "react";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";
import { createStructuredSelector} from "reselect";

import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo} from "../../assets/crown.svg";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import "./Header.styles.scss";

const Header = ({currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            {
                currentUser?
                (<div className="option" onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>)
                : 
                (<Link className="option" to="/signInSignUp">
                    SIGN IN
                </Link>)
            }

            <CartIcon />
        </div>
        {
            hidden ? null : 
            <CartDropdown />
        }
    </div>
);

const mapStatetoProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStatetoProps)(Header);