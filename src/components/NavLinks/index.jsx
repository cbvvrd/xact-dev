import { Link } from "react-router-dom";

function NavLinks() {
    return (
        <>
            <Link to="/xact-dev/" className="hover:text-blue-400 duration-75">Home</Link>
            <Link to="/xact-dev/demo" className="hover:text-blue-400 duration-75">Demo</Link>
            <Link to="/xact-dev/contact" className="hover:text-blue-400 duration-75">Contact</Link>
        </>
    );
}

export default NavLinks;