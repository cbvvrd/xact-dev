import { Link } from "react-router-dom";

function ContactUs() {
    return (
        <div className="flex flex-col items-center text-center gap-2 bg-green-300 bg-opacity-75 border border-black py-5 px-5 mb-8 md:mx-48 rounded-lg">
            <h4 className="text-lg font-semibold">Contact Us!</h4>
            <p>If you would like to get a quote or discuss what we can offer your business, please <Link to="/contact" className="underline"> get in touch</Link></p>
        </div>
    );   
}

export default ContactUs;