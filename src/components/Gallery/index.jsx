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
            <div className="overflow-x-scroll whitespace-nowrap h-64">
                {gallery.map(item =>
                    <div className="relative inline-block text-center">
                        <img src={item.image} />
                        <p className="absolute top-1/4  text-wrap text-white bg-black bg-opacity-35 font-bold text-3xl">Bespoke LabVIEW for Automation, Control & Test.</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Gallery;