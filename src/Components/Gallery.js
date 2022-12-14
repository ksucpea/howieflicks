import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import EnlargedContext from "../enlargedContext";

const scale = "w_600";
const scaled = 0.4;
const base = `https://res.cloudinary.com/dwedmxczj/image/upload/c_scale,${scale}`;

const Gallery = ({ images }) => {

    const Column = ({ images }) => {

        const enlarge = useContext(EnlargedContext);

        const enlargeImage = (src) => {
            enlarge.setSrc(src);
        }

        const renderImages = () => {
            return images.map(image => {
                console.log(image.height * scaled);
                return (
                    <div className="gallery-image-wrapper">
                        <LazyLoadImage key={image.src} height={image.height * scaled} width={image.width * scaled} src={base + image.src} threshold={-50} wrapperClassName="gallery-image" style={{ "height": "auto", "width": "100%" }} />
                        <div className="gallery-image-enlarger" onClick={() => enlargeImage(image.src)}></div>
                    </div>
                )
            });
        }

        return (
            <div className="gallery-column">
                {renderImages()}
            </div>
        )
    }

    const [screen, setScreen] = useState(3);

    const render = () => {
        let columns = [];
        for (let i = 0; i < screen; i++) {
            columns.push([]);
        }
        for (let i = 0; i < images.length; i++) {
            columns[i % screen].push(images[i]);
        }
        return columns.map((data, index) => {
            return <Column key={"col-" + index} images={data} />
        });
    }

    const determineNumOfCol = () => {
        if (window.innerWidth > 1400) {
            setScreen(3);
        } else if (window.innerWidth > 800) {
            setScreen(2);
        } else {
            setScreen(1);
        }
    }

    useLayoutEffect(() => {
        determineNumOfCol();
        window.addEventListener("resize", determineNumOfCol);
        return () => window.removeEventListener("resize", determineNumOfCol);
    }, []);

    if (images.length === 0) {
        return null;
    }
    return (
        <div style={{ "display": "flex", "flexWrap": "wrap", "width": "100%", "justifyContent": "space-evenly", "gap": "5vw", "margin": "0 auto", "marginTop": "-5vw", }}>
            <div style={{"position": "fixed", "height": "100%", "width": "100%"}}></div>
            {render()}
        </div>
    )
}

export default Gallery;