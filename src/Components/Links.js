import { useRef } from "react";

const Links = ({ toPage }) => {

    const arrow = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <line x1="15" y1="16" x2="19" y2="12"></line>
        <line x1="15" y1="8" x2="19" y2="12"></line>
    </svg>;

    const bringArrowToLink = (e) => {
        ref.current.style.opacity = "1";
        ref.current.style.top = (e.target.offsetTop - 2) + "px";
    }

    const removeArrow = () => {
        ref.current.style.opacity = "0";
    }

    const ref = useRef();

    return (
        <div onMouseLeave={removeArrow} style={{ "opacity": "1", "fontSize": "16px", "position": "relative", "color": "#fff" }}>
            <div ref={ref} style={{"opacity": "0", "transition": ".2s", "position": "absolute", "left": "-32px", "top": "0"}}>
                {arrow}
            </div>
            <div style={{ "display": "flex", "margin": "5vw 0 15px 0", "alignItems": "center" }}>
                <a className="penis" onClick={() => toPage("/me")} style={{ "marginRight": "15px", "color": "#fff", "display": "block", "fontSize": "30px" }}>howie k</a>
            </div>
            <a className="penis" onMouseEnter={bringArrowToLink} onClick={() => toPage("/")} style={{ "color": "#fff", "display": "block" }}>the void</a>
            <a className="penis" onMouseEnter={bringArrowToLink} onClick={() => toPage("/korea")} style={{ "color": "#fff", "display": "block", "marginTop": "5px" }}>korea</a>
            <a className="penis" onMouseEnter={bringArrowToLink} onClick={() => toPage("/baltimore")} style={{ "color": "#fff", "display": "block", "marginTop": "5px" }}>baltimore</a>
            <a className="penis" onMouseEnter={bringArrowToLink} onClick={() => toPage("/friends")} style={{ "color": "#fff", "display": "block", "marginTop": "5px" }}>live, laugh, love</a>
            <a className="penis" onMouseEnter={bringArrowToLink} onClick={() => toPage("/607")} style={{ "color": "#fff", "display": "block", "marginTop": "5px" }}>H607</a>
        </div>
    )
}

export default Links;