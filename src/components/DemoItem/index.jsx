import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import VideoEmbed from "../VideoEmbed";

function DemoItem({title, image, overview, description, github, video}) {

    const [hiddenText, setHiddenText] = useState(true);
    
    const hoverOnBox = () => {
        setTimeout( () => {setHiddenText(false)}, 150);
    }

    const hoverOffBox = () => {
        setTimeout( () => {setHiddenText(true)}, 50);
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <img src={image} alt="a background image of the demo project" />
                <div onMouseEnter={hoverOnBox} onMouseLeave={hoverOffBox} className="absolute flex flex-col pt-5 items-center bg-slate-950 text-white bg-opacity-50 w-full h-1/6 hover:h-64 duration-150 text-center">
                    <h3 className="text-3xl">{title}</h3>
                    <div className="flex items-center gap-1">
                        <p className="text-lg ">More </p>
                        <HiOutlineArrowNarrowDown />
                    </div>
                    {}
                    <div className="mt-10">
                        {hiddenText ? <></> : <p>{overview}</p> }
                    </div>
                </div>
                

            </div>
            <div className="flex flex-col items-center m-10 gap-1">
                <p className="text-center mb-3">{description}</p>
                <a href={github} target="_blank" className="underline">Github Repository <FontAwesomeIcon icon={faGithub} /> </a>
                {video && <VideoEmbed video={video} />}
                {/* <VideoEmbed video={video} /> */}
            </div>
        </div>
    );
}

export default DemoItem;