import React, { useState } from "react";
import EnlargedContext from "../enlargedContext";

const scale = "w_1500";
const base = `https://res.cloudinary.com/dwedmxczj/image/upload/c_scale,${scale}`;

const Enlarged = ({ children }) => {

    const [src, setSrc] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <EnlargedContext.Provider value={{ "setSrc": setSrc, "setOpen": setOpen }}>
            <div className="enlarged" onClick={() => setOpen(false)} style={{ "opacity": open ? "100%" : "0%", "visibility": open ? "initial" : "hidden" }}>
                <img className="enlarged-img" src={base + src} onLoad={() => { if (src !== "") setOpen(true) }}></img>
            </div>
            {children}
        </EnlargedContext.Provider>
    )
}

export default Enlarged;