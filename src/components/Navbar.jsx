import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import Container from "./Container";

const Navbar = () => {
    const { user, setUser } = useContext(AuthContext);
    let history = useHistory();
    /**
     * 
     * Logout | remove user token
     */
    const handleLogout = () => {

        // remove user from local storage
        localStorage.removeItem("user");

        // remove authenticated user
        setUser({})

        // redirect to posts page
        history.replace("/login")

    }


    return <nav >
        <Container>
            <div className="nav-wrapper">
                <h1 className="logo">Logo</h1>
                <ul className="list">
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    {
                        user?.email &&
                        <li>
                            <Link to="/posts" className="link">Posts</Link>
                        </li>
                    }
                    <li>
                        {
                            user?.email
                                ? <button onClick={handleLogout} className="link btn-login" >Logout</button>
                                : <Link to="/login" className="link btn-login" >Login</Link>
                        }
                    </li>
                </ul>
            </div>
        </Container>
    </nav>
}

export default Navbar;