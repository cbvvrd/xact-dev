import { faBars, faCross, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";


function Header() {

    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
            <header className="flex justify-between px-5 py-3 border-b border-black md:justify-around md:px-0">
                <img src="images/xact-logo-1.png" alt="Xact Developments logo" className="h-16 md:h-20"/>
                <button onClick={() => {setMenuOpen(!menuOpen)}}><FontAwesomeIcon icon={faBars} className={menuOpen ? "text-2xl rotate-90 text-slate-900 md:hidden" : "text-2xl text-slate-900 md:hidden"}/> </button>
                <nav className="hidden self-center text-lg md:flex gap-7">
                    <Link to="/" className="hover:text-blue-400 duration-75">Home</Link>
                    <Link to="/demo" className="hover:text-blue-400 duration-75">Demo</Link>
                    <Link to="/contact" className="hover:text-blue-400 duration-75">Contact</Link>
                </nav>    
            </header>

            <div className={menuOpen ? "fixed top-0 right-0 flex flex-col items-center gap-1 pt-8 pl-10 pr-5  h-full bg-slate-800 text-white text-lg" : "hidden"}>
                <button onClick={() => setMenuOpen(false)} className="self-end"><FontAwesomeIcon icon={faX} className="text-xl hover:text-blue-400 duration-75" /></button>
                {/* <p className="underline">Navigate to:</p> */}
                <nav className="flex flex-col items-end text-center gap-3 pt-5">
                    <Link to="/" className="hover:text-blue-400 duration-75">Home</Link>
                    <Link to="/demo" className="hover:text-blue-400 duration-75">Demo</Link>
                    <Link to="/contact" className="hover:text-blue-400 duration-75">Contact</Link>
                </nav>
            </div>
        </>
    );
}

export default Header;