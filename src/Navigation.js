import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navigation(){
    return    <nav className="navigationbar" >
        <Link to="/" className="sub-page"> Site name </Link>
        <ul>
                <ActiveLink to="/about_me">About me</ActiveLink>
                <ActiveLink to="/contact">Contact</ActiveLink>
        </ul>
    </nav>
}

function ActiveLink({to, children, ...props}){ //Sets the current window as active and generates the lists
    const resolvedPath = useResolvedPath(to) //Converts relative path to absolute
    const isActive = useMatch({ path: resolvedPath.pathname, end: true}) //Full match
    return (
        <li className = {isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}