import { useLocation } from "react-router-dom";
import Gallery from "./Gallery";
import sections from "../sections.json";
import SectionName from "./SectionName";
import Enlarged from "./Enlarged";

const Section = () => {

    const location = useLocation();

    return (
        <div className="section">
            <div className="section-container">
                <SectionName name={sections[location.pathname].name} />
                <Enlarged>
                    <Gallery images={sections[location.pathname].gallery} />
                </Enlarged>
            </div>
        </div>
    )
}

export default Section;