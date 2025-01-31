import { SiLabview } from "react-icons/si";

function DemosTitle() {
    return (
        <div className="flex flex-col items-center text-center gap-1 my-5 py-7 bg-blue-200 md:my-10">
            <h1 className="text-2xl font-semibold">Demo</h1>
            <p className="md:text-lg">Example of software we have built </p>
            <SiLabview size={75}/>
        </div>
    );
}

export default DemosTitle;