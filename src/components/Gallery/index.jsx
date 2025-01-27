import { useEffect } from "react";
import { useState } from "react";


function Gallery() {

    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetch("galleryData.json")
        .then(res => res.json())
        .then(galleryData => {
            setGallery(galleryData.gallery);
        });
    }, []);


    return (
        <>
            <div className="overflow-x-scroll whitespace-nowrap h-64 md:h-[32rem]">
                {gallery.map(item =>
                    <div className="relative inline-block text-center md:w-screen ">
                        <img src={item.image} className="object-cover h-64 md:h-[30rem] md:w-screen" />
                        <p className="absolute top-1/4 md:left-1/4 py-2 text-wrap text-white bg-black bg-opacity-40 font-bold text-3xl">{item.text}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Gallery;