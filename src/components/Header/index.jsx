import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="flex justify-between px-5 py-1 border-b border-slate-600 md:justify-around md:px-0">
                <Link to="/xact-dev/">
                    <img src="images/xact-logo-1.png" alt="Xact Developments logo" className="h-16 md:h-20"/>
                </Link>
                <button onClick={() => {setMenuOpen(!menuOpen)}}><FontAwesomeIcon icon={faBars} className={menuOpen ? "text-2xl rotate-90 text-slate-900 md:hidden" : "text-2xl text-slate-900 md:hidden"}/> </button>
                <nav className="hidden self-center text-lg md:flex gap-7">
                    <NavLinks />
                </nav>    
            </header>

            <div className={menuOpen ? "fixed z-20 top-0 right-0 flex flex-col items-center gap-1 pt-8 pl-10 pr-5  h-full bg-slate-800 text-white text-lg" : "hidden"}>
                <button onClick={() => setMenuOpen(false)} className="self-end"><FontAwesomeIcon icon={faX} className="text-xl hover:text-blue-400 duration-75" /></button>
                <nav className="flex flex-col items-end text-center gap-3 pt-5">
                    <NavLinks />
                </nav>
            </div>
        </>
    );
}

export default Header;