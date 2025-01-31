import { useEffect, useState } from "react";
import DemoItem from "../DemoItem";

function Demos() {

    const [demos, setDemos] = useState([]);

    useEffect(() => {
        fetch("demos.json")
            .then(res => res.json())
            .then(demoData => {
                setDemos(demoData.demos);
            });
    }, []);

    return (
        <div>
            {demos.map(demo =>
                <DemoItem key={demo.id} 
                          id={demo.id}
                          title={demo.title}
                          image={demo.image}
                          overview={demo.overview}
                          description={demo.description}
                          github={demo.github}
                          video={demo.video}/>
            )}
        </div>
    );
}

export default Demos;