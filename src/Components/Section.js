import { useLocation } from "react-router-dom";
import Gallery from "./Gallery";
import sections from "../sections.json";
import SectionName from "./SectionName";

const Section = () => {

    const location = useLocation();

    return (
        <div className="section">
            <div className="section-container">
                <SectionName name={sections[location.pathname].name} />
                <Gallery images={sections[location.pathname].gallery} />
            </div>
        </div>
    )
}

export default Section;