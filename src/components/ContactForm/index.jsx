
function ContactForm() {
    return (
        <div className="border border-black flex flex-col p-3 bg-slate-400 m-4 gap-1 md:w-1/2 self-center">
            <h2 className="text-xl font-semibold">Contact Form</h2>
            <form>
                <div className="flex flex-col gap-1">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" />
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" />
                    <label for="query">Query:</label>
                    <textarea id="query" name="query" rows="5" cols="25" />
                    <input type="submit" value="Submit" className="bg-slate-200 p-2 m-2 rounded-xl hover:font-semibold hover:bg-slate-600"/>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;