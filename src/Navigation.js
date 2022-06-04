import React from "react"
import { Link, NavLink } from "react-router-dom"
import {IoPerson as AboutMeIcon} from "react-icons/io5"
import {IoMail as ContactIcon} from "react-icons/io5"
import {IoHome as HomeIcon} from "react-icons/io5"

export default function Navigation(){
    return    <nav className="navigationbar fixed-top" >
        <Link to="/" className="sub-page"> Site name </Link>
        <ul>
            <NavigationTabs to="/" icon={<HomeIcon />}> Home</NavigationTabs>
            <NavigationTabs to="/about_me" icon={<AboutMeIcon />}> About me</NavigationTabs>
            <NavigationTabs to="/contact" icon={<ContactIcon />}> Contact</NavigationTabs>
        </ul>
    </nav>
}

function NavigationTabs ({to, children, icon, ...props}) {
    return (<li>
        <NavLink to={to}{...props}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {icon}
        <div className="nav-text-content d-sm-inline-block">{children}</div>
</NavLink>

    </li>)
}