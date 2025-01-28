import { useEffect } from "react";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


function Gallery() {

    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetch("galleryData.json")
        .then(res => res.json())
        .then(galleryData => {
            setGallery(galleryData.gallery);
        });
    }, []);

    const innerGallery = document.getElementById("innerGallery")
    
    const slideRight = () => {
        let width = screen.width;
        innerGallery.scrollLeft += width;
    }

    const slideLeft = () => {
        let width = screen.width;
        innerGallery.scrollLeft -= width;
    }

    // function timedScroll() {
    //     slideRight;
    // }
     
    // setTimeout(slideRight, 1000);

    return (
        <>
            <div className="flex items-center ">
            <MdChevronLeft onClick={slideLeft} className=" absolute z-10 left-1 text-[1.5em] text-blue-400 bg-white border border-slate-300 rounded-full"/>
                <div id="innerGallery" className="snap-x overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth h-64 md:h-[32rem]">
                    
                {gallery.map(item =>
                    
                    <div className="relative inline-block text-center">
                        <img src={item.image} className="snap-center object-cover h-64 md:h-[30rem] md:w-screen" />
                        <p className="absolute top-1/4 md:left-1/4 py-2 text-wrap text-white bg-black bg-opacity-40 mx-10 font-bold text-3xl">{item.text}</p>
                    </div>
                )}
            </div>
            <MdChevronRight onClick={slideRight}  className="absolute right-1 text-[1.5em] z-10  text-blue-400 bg-white border border-slate-300 rounded-full"/>
            </div>
        </>
    );
}

export default Gallery;