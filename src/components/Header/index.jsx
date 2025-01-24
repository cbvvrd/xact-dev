import { faBars, faCross, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


function Header() {

    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
            <header className="flex justify-between px-5 py-3 border-b border-black md:justify-around md:px-0">
                <img src="images/xact-logo-1.png" alt="Xact Developments logo" className="h-16 md:h-20"/>
                <button onClick={() => {setMenuOpen(!menuOpen)}}><FontAwesomeIcon icon={faBars} className={menuOpen ? "text-2xl rotate-90 text-slate-900 md:hidden" : "text-2xl text-slate-900 md:hidden"}/> </button>
                <nav className="hidden self-center text-lg md:flex gap-7">
                    <a href="#" className="hover:text-blue-400 duration-75">Home</a>
                    <a href="#" className="hover:text-blue-400 duration-75">Demo</a>
                    <a href="#" className="hover:text-blue-400 duration-75">Contact</a>
                </nav>    
            </header>

            <div className={menuOpen ? "fixed right-0 flex flex-col gap-1 p-3 bg-slate-300" : "hidden"}>
                <button onClick={() => setMenuOpen(false)} className="self-end"><FontAwesomeIcon icon={faX} /></button>
                <p className="underline">Navigate to:</p>
                <nav className="flex flex-col">
                    <a href="#">Home</a>
                    <a href="#">Demo</a>
                    <a href="#">Contact</a>
                </nav>
            </div>
        </>
    );
}

export default Header;