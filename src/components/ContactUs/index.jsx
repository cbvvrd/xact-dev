import { Link } from "react-router-dom";

function ContactUs() {
    return (
        <div className="flex flex-col items-center text-center text-white gap-2 py-8 px-5 bg-gradient-to-r from-purple-500 to-red-500">
            <h4 className="text-lg font-semibold">Contact Us!</h4>
            <p>If you would like to get a quote or discuss what we can offer your business, please <Link to="/contact" className="underline"> get in touch</Link></p>
        </div>
    );   
}

export default ContactUs;