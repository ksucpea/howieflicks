import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import sections from "../sections.json";

const arrow = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <line x1="15" y1="16" x2="19" y2="12"></line>
    <line x1="15" y1="8" x2="19" y2="12"></line>
</svg>;

const Links = ({ active }) => {

    const [opac, setOpac] = useState(1);
    const bgOpacEl = useRef();
    const arrowEl = useRef();
    const navigate = useNavigate();

    const bringArrowToLink = (e) => {
        arrowEl.current.style.opacity = "1";
        arrowEl.current.style.top = (e.target.offsetTop - 2) + "px";
    }

    const removeArrow = () => {
        arrowEl.current.style.opacity = "0";
    }

    useEffect(() => {
        setOpac(.6);
    }, [active]);

    const toPage = (url) => {
        const img = new Image().src = sections[url].background;
        setOpac(1);
        setTimeout(() => {
            navigate(url);
        }, 600);
    }

    return (
        <div className="links-bg" style={{ "opacity": opac }}>
            <div style={{ "width": "80%", "height": "100vh", "display": "flex", "margin": "0 auto", }}>
                <div onMouseLeave={removeArrow} className="link-container">
                    <div ref={arrowEl} id="link-arrow" style={{ "opacity": "0", "top": "0" }}>
                        {arrow}
                    </div>
                    <a className="link home-link" onClick={() => toPage("/")}>howie k</a>
                    <a className="link" onMouseEnter={bringArrowToLink} onClick={() => toPage("/architecture")}>architecture</a>
                    <a className="link" onMouseEnter={bringArrowToLink} onClick={() => toPage("/film")}>film</a>
                    <a className="link" onMouseEnter={bringArrowToLink} onClick={() => toPage("/portraits")}>portraits</a>
                    <a className="link" onMouseEnter={bringArrowToLink} onClick={() => toPage("/still")}>still life</a>
                    <a className="link" onMouseEnter={bringArrowToLink} onClick={() => toPage("/street")}>street</a>
                </div>
            </div>
        </div>
    )
}

export default Links;