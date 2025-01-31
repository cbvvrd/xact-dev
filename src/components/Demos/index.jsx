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
                <DemoItem title={demo.title} image={demo.image} description={demo.description} github={demo.github} video={demo.video}/>
            )}
        </div>
    );
}

export default Demos;