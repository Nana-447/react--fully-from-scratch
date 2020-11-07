import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>

            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div 
                    className='option' 
                    onClick={() => auth.signOut()}
                >
                    SIGN OUT
                </div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
)

// CurrentUser will be the argument passed as the prop
// State is the root reducer
// We want the currentUser from the state(rootReducer) >> user (userReducer) >> currentUser
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);