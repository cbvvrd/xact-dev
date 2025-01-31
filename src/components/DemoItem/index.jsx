import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { HiOutlineArrowNarrowDown, HiOutlineArrowNarrowRight } from "react-icons/hi";
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

            <div className="flex flex-col items-center md:flex-row">
                <img src={image} alt="a background image of the demo project" className="md:size-1/2"/>
                <div onMouseEnter={hoverOnBox} onMouseLeave={hoverOffBox} className="absolute flex flex-col pt-5 items-center bg-slate-950 text-white bg-opacity-50 w-full h-1/6 hover:h-64 duration-150 text-center md:w-1/6 md:h-28 md:hover:w-1/4">
                    <h3 className="text-3xl">{title}</h3>
                    <div className="flex items-center gap-1">
                        <p className="text-lg">More </p>
                        <HiOutlineArrowNarrowDown className="md:hiddn"/>
                        <HiOutlineArrowNarrowRight className="hidden " />
                    </div>
                    <div className="mt-10">
                        {hiddenText ? <></> : <p>{overview}</p> }
                    </div>
                </div>
                <p className="text-center mt-8 px-10 md:text-lg">{description}</p>
            </div>

            <div className="flex flex-col items-center m-10 gap-5">
                
                <a href={github} target="_blank" className="underline">Github Repository <FontAwesomeIcon icon={faGithub} /> </a>
                {video && <VideoEmbed video={video} />}
            </div>

        </div>
    );
}

export default DemoItem;