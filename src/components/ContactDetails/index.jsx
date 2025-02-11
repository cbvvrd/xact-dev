import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import ContactForm from "../ContactForm";

function ContactDetails() {
    return (
        <div className="flex flex-col justify-stretch gap-5 mt-8 mb-10 mx-3 md:mx-24">
            <p className="text-lg text-center">Email: 
                <a href="mailto:contact@xactdev.co.uk" className="underline underline-offset-2 hover:underline-offset-4 hover:text-purple-900 duration-150">contact@xactdev.co.uk</a>
            </p>
            <ContactForm />
            <div className="flex justify-center gap-5 text-xl">
                <p className="hover:text-purple-900">Github <FaGithub /></p>
                <p className="hover:text-purple-900">LinkedIn <FaLinkedin /></p>
                <p className="hover:text-purple-900">Youtube <FaYoutube /></p>
            </div>
        </div>
    );
}

export default ContactDetails;