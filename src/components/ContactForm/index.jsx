import emailjs from "@emailjs/browser";
import { useRef } from "react";

function ContactForm() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("contact_service", "contact_form", form.current, {
                publicKey: "TS2BKpjtOdfNW-g1w"
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                },
            );
    }


    return (
        <div className="border border-black flex flex-col p-3 bg-slate-400 m-4 gap-1 w-full md:w-1/2 self-center">
            <h2 className="text-xl font-semibold">Contact Form</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="user_name" />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="user_email" />
                    <label htmlFor="query">Query:</label>
                    <textarea id="query" name="message" rows="5" cols="25" />
                    <input type="submit" value="Send" className="bg-slate-200 p-2 m-2 rounded-xl hover:font-semibold hover:bg-slate-600"/>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;