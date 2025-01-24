import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Header() {
    return (
        <>
        <header className="flex justify-between pl-5 pr-8 py-3 border-b border-black">
            <img src="images/xact-logo-1.png" alt="Xact Developments logo" className="h-16"/>
            <button><FontAwesomeIcon icon={faBars} className="text-2xl text-slate-900"/> </button>
            <div className="hidden">
                <a href="#">Home</a>
                <a href="#">Demo</a>
                <a href="#">Contact</a>
            </div>
        </header>
        </>
    );
}

export default Header;