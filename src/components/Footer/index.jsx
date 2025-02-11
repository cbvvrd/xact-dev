import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
    return (
            <footer className="w-full flex justify-around bg-slate-300 border-t border-black text-xs py-5 md:justify-between md: px-7">
                <p>&copy; Xact Automation 2025</p>
                <div className="flex gap-2">
                    <FontAwesomeIcon icon={faGithub} className="text-xl hover:text-purple-900" />
                    <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-purple-900" />
                </div>
                <p>Website by <Link to="https://cbvvrd.github.io/portfolio/" target="_blank" className="underline hover:text-purple-900">Charlie Bird</Link></p>
            </footer>
    );
}

export default Footer;