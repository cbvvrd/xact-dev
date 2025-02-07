import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
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
        <div className="flex flex-col items-center md:mx-32 border-b border-black mb-10">

            <div className="flex flex-col items-center md:flex-row relative">
                <img src={image} alt="a background image of the demo project" className="md:size-1/2 "/>
                <div onMouseEnter={hoverOnBox} onMouseLeave={hoverOffBox} className="absolute flex flex-col pt-5 items-center md:justify-center bg-slate-950 text-white bg-opacity-50 
                                                                                        w-full h-1/6 hover:h-64 duration-300 text-center md:w-36 md:h-fit md:hover:h-fit md:hover:w-1/3 lg:h-full lg:hover:h-full">
                    <h3 className="text-3xl">{title}</h3>
                    <div className="py-1 px-2">
                        {hiddenText ? <p className="text-md underline">More</p> : <></>}
                        {hiddenText ? <></> : <p>{overview}</p> }
                    </div>
                </div>
                <p className="text-center mt-8 px-10 md:text-lg">{description}</p>
            </div>

            <div className="flex flex-col items-center m-10 gap-5">
                
                <a href={github} target="_blank" className="text-lg md:text-xl underline underline-offset-2 hover:text-purple-900 hover:underline-offset-4 duration-150 mb-5">Github Repository <FontAwesomeIcon icon={faGithub} /> </a>
                {video && <VideoEmbed video={video} />}
            </div>

        </div>
    );
}

export default DemoItem;