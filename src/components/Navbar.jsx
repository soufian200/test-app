import { Link } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
    return <nav className="py-4" >
        <Container>
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl">Logo</h1>
                <ul className="flex">
                    <li>
                        <Link to="/" className="font-bold mx-4 hover:text-red-500">Home</Link>
                    </li>
                    <li>
                        <Link to="/login" className="bg-red-400 hover:bg-red-500 transition-all mx-4 py-3 px-4 rounded-full font-bold" >Login</Link>
                    </li>
                </ul>
            </div>
        </Container>
    </nav>
}

export default Navbar;