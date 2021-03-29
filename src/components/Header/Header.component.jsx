import React from "react";

import { auth } from "../../firebase/firebase.util";
import { createStructuredSelector} from "reselect";

import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo} from "../../assets/crown.svg";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { HeaderContainer, LogoContainer, OptionsConatiner, OptionLink} from "./header.styles";

const Header = ({currentUser, hidden }) => (
    <HeaderContainer >
        <LogoContainer to="/">
            <Logo className="logo"/>
        </LogoContainer>
        <OptionsConatiner>
            <OptionLink to="/shop" >SHOP</OptionLink>
            <OptionLink to="/contact">CONTACT</OptionLink>
            {
                currentUser?
                (<OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLink>)
                : 
                (<OptionLink to="/signInSignUp">
                    SIGN IN
                </OptionLink>)
            }

            <CartIcon />
        </OptionsConatiner>
        {
            hidden ? null : 
            <CartDropdown />
        }
    </HeaderContainer>
);

const mapStatetoProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStatetoProps)(Header);