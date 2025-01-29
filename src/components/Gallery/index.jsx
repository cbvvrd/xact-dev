import { useEffect } from "react";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight, MdOutlinePauseCircle, MdOutlinePlayCircle } from "react-icons/md";


function Gallery() {

    const [gallery, setGallery] = useState([]);
    // const [paused, setPaused] = useState(false);

    useEffect(() => {
        fetch("galleryData.json")
        .then(res => res.json())
        .then(galleryData => {
            setGallery(galleryData.gallery);
        });
    }, []);

    const innerGallery = document.getElementById("innerGallery")
    
    function slideRight() {
        let width = screen.width;
        innerGallery.scrollLeft += width;
    }

    const slideLeft = () => {
        let width = screen.width;
        innerGallery.scrollLeft -= width;
    }


    // -- Logic for the gallery autoscroll -- //
    // -- Not sure about all of this but it does work -- //
    // -- Disabling for now, will come back to later -- //

    // const [count, setCount] = useState(0);

    // function increaseCount() {
    //     setTimeout(setCount(count+1), 3000);
    //     setInterval(slideRight, 4000);
    //     // console.log(count);
    // }

    // useEffect(() => {
    //     if (count < 4) {
    //        setInterval(increaseCount(), 3000);
    //        console.log(count);
    //     } 
    // }, [count])

    // -- End autoscroll -- // 

    return (
        <>
            <div className="flex items-center ">
            <MdChevronLeft onClick={slideLeft} className=" absolute z-10 left-1 md:left-3 text-[1.5em] md:text-[2.53em] text-blue-400 bg-white border border-slate-300 rounded-full"/>
                <div id="innerGallery" className="snap-x overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth h-64 md:h-[42rem]">
                    
                {gallery.map(item =>
                    
                    <div key={item.id} className="relative inline-block text-center">
                        <img src={item.image} alt="background image of engineering work" className="snap-center object-cover h-64 md:h-[40rem] md:w-screen" />
                        <p className="absolute top-1/4 md:left-1/4 md:top-1/3 p-2 md:w-1/3 text-3xl text-wrap text-white bg-black bg-opacity-40 mx-10 font-bold md:text-5xl">{item.text}</p>
                    </div>
                )}
            </div>
            <MdChevronRight onClick={slideRight}  className="absolute right-1 md:right-3 text-[1.5em] md:text-[2.53em] z-10  text-blue-400 bg-white border border-slate-300 rounded-full"/>
            
            </div>
            <div>
            {/* {paused ? <MdOutlinePauseCircle /> : <MdOutlinePlayCircle />} */}
            </div>
        </>
    );
}

export default Gallery;