import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        // <nav className="navbar navbar-dark bg-dark">
        //     <div className="container-fluid">
        //         <NavLink to="/" className="navbar-brand">
        //             <i className="bi-cup-hot me-2"></i>
        //             Meal On Time
        //         </NavLink>

        //         <ul className="navbar-nav flex-row">
        //             <li className="nav-item me-3">
        //                 <NavLink to="/add-dish" className="nav-link">
        //                     Add Dish
        //                 </NavLink>
        //             </li>
        //             <li className="nav-item me-3">
        //                 <NavLink to="/about" className="nav-link">
        //                     About
        //                 </NavLink>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>

        <AppBar
            position="static"
            color="default"
            enableColorOnDark
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Button color="warning">
                        <NavLink to="/" className="navbar-brand">
                            <i className="bi-cup-hot me-2"></i>
                            Meal On Time
                        </NavLink>
                    </Button>
                    <Button color="warning">
                        <NavLink to="/add-dish" className="nav-link">
                            Add Dish
                        </NavLink>
                    </Button>
                    <Button color="warning">
                        <NavLink to="/about" className="nav-link">
                            About
                        </NavLink>
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;