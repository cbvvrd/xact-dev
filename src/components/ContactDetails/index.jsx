import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import ContactForm from "../ContactForm";

function ContactDetails() {
    return (
        <div className="flex flex-col gap-5 mt-8 mb-10 md:mx-24">
            <p className="text-xl text-center">Email: <a href="mailto:contact@xactdev.co.uk" className="underline underline-offset-2 hover:font-semibold hover:underline-offset-4 duration-150">contact@xactdev.co.uk</a></p>
            <ContactForm />
            <div className="flex justify-center gap-5 text-xl">
                <p>Github <FaGithub /></p>
                <p>LinkedIn <FaLinkedin /></p>
                <p>Youtube <FaYoutube /></p>
            </div>
        </div>
    );
}

export default ContactDetails;