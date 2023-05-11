import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <i className="bi-cup-hot me-2"></i>
                    Meal On Time
                </NavLink>

                <ul className="navbar-nav flex-row">
                    <li className="nav-item me-3">
                        <NavLink to="/about" className="nav-link">
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;