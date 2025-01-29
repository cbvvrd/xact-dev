import { faGit, faGithub, faLinkedin, faMagento, faMailchimp } from "@fortawesome/free-brands-svg-icons";
import { faCopy, faCopyright, faHelicopterSymbol, faMailBulk, faMailForward, faMailReply, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="w-full flex justify-around bg-slate-300 border-t border-black text-xs py-5 md:justify-between md: px-7">
                <div>
                    {/* <p onClick={() => window.scrollTo({ top: 0 })}>Top</p> */}
                    <p>&copy; Xact Automation 2025</p>
                </div>
                <div className="flex gap-2">
                    <FontAwesomeIcon icon={faGithub} className="text-xl" />
                    <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                </div>
                <p>Website by <Link to="https://cbvvrd.github.io/portfolio/" target="_blank" className="underline" >Charlie Bird</Link></p>
                
            </footer>
        </>
    );
}

export default Footer;