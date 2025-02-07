import { GrOptimize, GrLike } from "react-icons/gr";

function ServiceBulletPoints() {
    return (
        <ul className="list-disc justify-self-center my-2">
            <GrOptimize className="justify-self-center m-5 text-xl"/>
            <li>We</li>
            <li>Can</li>
            <li>Do</li>
            <li>Many</li>
            <li>Things</li>
            <GrLike className="justify-self-center mt-5 text-xl"/>
        </ul>
    );
}

export default ServiceBulletPoints;