import { useContext, useEffect } from "react";
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

    useEffect(() => {
        console.log("nav: ", user)

        // console.log(user?.email)
    }, [user])

    return <nav className="py-4" >
        <Container>
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl">Logo</h1>
                <ul className="flex items-center">
                    <li>
                        <Link to="/" className="font-bold mx-4 hover:text-sky-400">Home</Link>
                    </li>
                    {
                        user?.email &&
                        <li>
                            <Link to="/posts" className="font-bold mx-4 hover:text-sky-400">Posts</Link>
                        </li>
                    }
                    <li>
                        {
                            user?.email
                                ? <button onClick={handleLogout} className="bg-sky-400 hover:bg-sky-500 transition-all mx-4 py-3 px-4 rounded-full font-bold" >Logout</button>
                                : <Link to="/login" className="bg-sky-400 hover:bg-sky-500 transition-all mx-4 py-3 px-4 rounded-full font-bold" >Login</Link>
                        }
                    </li>
                </ul>
            </div>
        </Container>
    </nav>
}

export default Navbar;