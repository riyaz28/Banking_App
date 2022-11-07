import React from 'react';
import { Logo } from './Logo';

export const SideNavbar = (props) => {
    const { user, logoutHandler, changePage, page } = props;

    return(
        <section id="side-menu">
            <Logo />
            <UserMenu changePage={changePage} page={page} logoutHandler={logoutHandler} />
        </section>
    )
}

export const UserMenu = (props) => {
    const {changePage, logoutHandler, page} = props;

    return (
        <ul>
            <NavLink onClickHandler={changePage} active={page} page="home" icon="bx bx-home" text="Home" />
            <NavLink onClickHandler={changePage} active={page} page="budget" icon="bx bx-money" text="Budget App" />
            <NavLink onClickHandler={changePage} active={page} page="transfer" icon="bx bx-transfer" text="Fund Transfer" />
            <NavLink onClickHandler={logoutHandler} active={page} icon="bx bx-log-out" text="Logout" />
        </ul>
    )
}
  
export const NavLink = (props) => {
    const {icon, text, page, active} = props;
    
    function handleClickLink(event) {
        if(page) {
            event.preventDefault();
            props.onClickHandler(page);
        } else {
            event.preventDefault();
            props.onClickHandler();
        }
    }

    return (
        <li><a onClick={handleClickLink} className={ active === page ? 'active' : '' } href="#"><i className={icon} ></i> {text}</a></li>
    )
}

