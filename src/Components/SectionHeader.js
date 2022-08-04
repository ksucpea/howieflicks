import Links from "./Links";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import sections from "../sections.json";

const SectionHeader = () => {

    const location = useLocation();
    const [image, setImage] = useState(sections[location.pathname].background);

    useEffect(() => {
        setImage(sections[location.pathname].background);
    }, [location.pathname]);

    return (
        <div className="section-header" style={{ "backgroundImage": `url(${image})` }}>
            <Links active={location.pathname} />
        </div>
    )
}

export default SectionHeader;