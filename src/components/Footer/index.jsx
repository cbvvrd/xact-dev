import { faGit, faGithub, faLinkedin, faMagento, faMailchimp } from "@fortawesome/free-brands-svg-icons";
import { faCopy, faCopyright, faHelicopterSymbol, faMailBulk, faMailForward, faMailReply, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="fixed bottom-0 w-full flex justify-around border-t border-black text-sm">
                <p>&copy; Xact Automation 2025</p>
                <div className="flex flex-col gap-2">
                    <FontAwesomeIcon icon={faGithub} className="text-xl" />
                    <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                    <FontAwesomeIcon icon={faMailBulk} className="text-xl" />
                </div>
                <p>Website by <Link to="https://cbvvrd.github.io/portfolio/" className="underline" >Charlie Bird</Link></p>
                <p onClick={() => window.scrollTo({ top: 0 })}>Top</p>
            </footer>
        </>
    );
}

export default Footer;