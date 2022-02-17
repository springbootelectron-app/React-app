import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser, faBars, faSignOut} from '@fortawesome/free-solid-svg-icons';
import '../static/css/styles/navbar.css';


export default class NavBar extends Component {

    render() {

        const {dropdownActive,
                onPhoneBurgerClick,
                onSelectPhonePage,
                pageSelected,
                onUserClick,
                userMenuActive,
                onPageClick    
            } = this.props;
        return (
            <div>
                <div id="navWrapper">
                    <div id="leftNav">
                        <FontAwesomeIcon icon={faHome} id="homeIcon"/>
                        <span id="homeNav" onClick={() => onPageClick(1)} className={pageSelected[0].className}>Home</span>
                        <span id="accountsNav" onClick={() => onPageClick(2)} className={pageSelected[1].className}>Accounts</span>
                        <span id="transactionsNav" onClick={() => onPageClick(3)} className={pageSelected[2].className}>Transactions</span>
                        <span id="calendarNav" onClick={() => onPageClick(4)} className={pageSelected[3].className}>Calendar</span>
                    </div>
                    <div id="rightNav">
                        <FontAwesomeIcon icon={faUser} id="userIcon" onClick={onUserClick}/>
                        <span id="usernameNav" onClick={onUserClick}>babadany2999@gmail.com</span>
                        <div id="userDropdown" className={userMenuActive}>
                            <FontAwesomeIcon icon={faSignOut} id="userLogoutIcon"></FontAwesomeIcon>
                            <span id="userLogout">Logout</span>
                        </div>
                    </div>
                </div>
                <div id="navWrapperMobile">
                    <div id="dropdownBurgerNav">
                        <FontAwesomeIcon icon={faBars} id="burgerIcon" onClick={() => onPhoneBurgerClick() }/>
                        <div id="dropdownBurger" className={dropdownActive}>
                            <span id="homeNav" onClick={() => onSelectPhonePage(1)} className={pageSelected[0].className}>Home</span>
                            <span id="accountsNav" onClick={() => onSelectPhonePage(2)} className={pageSelected[1].className}>Accounts</span>
                            <span id="transactionsNav" onClick={() => onSelectPhonePage(3)} className={pageSelected[2].className}>Transactions</span>
                            <span id="calendarNav" onClick={() => onSelectPhonePage(4)} className={pageSelected[3].className}>Calendar</span>
                        </div>
                    </div>
                    <div id="navUser">
                        <FontAwesomeIcon icon={faUser} id="userIcon" onClick={() => onUserClick()}/>
                        <div id="userDropdown" className={userMenuActive}>
                            <FontAwesomeIcon icon={faSignOut} id="userLogoutIcon"></FontAwesomeIcon>
                            <span id="userLogout">Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}