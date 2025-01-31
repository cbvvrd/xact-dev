import { SiLabview } from "react-icons/si";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <div className="flex flex-col items-center text-center gap-5 px-5 mt-10 py-7 bg-blue-100 md:px-48">
                <h3 className="text-2xl font-semibold">About Us</h3>
                <p className="md:text-lg">Xact Developments are here to help you find automation solutions for your business. Facere iure quod recusandae modi at doloribus laudantium quasi optio tempora numquam laborum voluptatibus expedita, sunt, rerum sint! Animi modi qui iusto.</p>
                <SiLabview size={100}/>
                <p className="md:text-lg">Aliquam commodo consectetur lorem, hendrerit pellentesque eros rutrum vel. Morbi ut vulputate eros. Phasellus fringilla enim id facilisis interdum. Duis venenatis lacus at ante iaculis, sit amet blandit dui dignissim. Aliquam dapibus neque vitae aliquet tristique. Aenean ut massa eleifend ligula imperdiet malesuada et quis justo. </p>
                <div className="bg-green-400 text-center mx-10 rounded-xl border-4 border-green-600 bg-opacity-50 hover:bg-green-100 hover:text-amber-600 duration-150 p-1 md:mt-5">
                    <Link to="/xact-dev/demo" className="text-4xl font-semibold p-4">See a Demo</Link>
                </div>
            </div>
            
        </>
    );
}

export default About;