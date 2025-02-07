import { Link } from "react-router-dom";

function ContactUs() {
    return (
        <Link to="/xact-dev/contact">
        <div className="flex flex-col items-center text-center text-white gap-2 py-8 px-5 bg-gradient-to-r from-purple-500 to-red-500 hover:underline">
            <h4 className="text-xl font-semibold">Contact Us!</h4>
            <p>If you would like to get a quote or discuss what we can offer your business, please get in touch.</p>
        </div>
        </Link>
    );   
}

export default ContactUs;