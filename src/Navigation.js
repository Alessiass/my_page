import { NavLink } from "react-router-dom"

export default function Navigation(){
    return    <nav className="navigationbar" >
        <NavLink to="/" className="sub-page"> Site name </NavLink>
        <ul>
            <NavigationTabs to="/about_me">About me</NavigationTabs>
            <NavigationTabs to="/contact">Contact</NavigationTabs>
        </ul>
    </nav>
}

function NavigationTabs ({to, children, ...props}) {
    return (<li>
        <NavLink to={to}{...props}>{children}</NavLink>
    </li>)
}