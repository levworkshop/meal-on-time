import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <i className="bi-cup-hot me-2"></i>
                    Meal On Time
                </a>

                <ul className="navbar-nav flex-row">
                    <li className="nav-item me-3">
                        <NavLink to="/page2" className="nav-link">
                            Page 2
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;