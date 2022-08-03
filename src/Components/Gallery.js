import React, { useLayoutEffect, useRef, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Gallery = ({ images }) => {

    const Column = ({ images }) => {

        const Image = ({ src, height, width }) => {
            //const [loaded, setLoaded] = useState(false);
            return (
                <LazyLoadImage height={height} width={width} src={src} effect="opacity" threshold={-100} wrapperClassName="gallery-image" style={{ "height": "auto", "width": "100%" }} />
            )
        }

        const renderImages = () => {
            return images.map(image => {
                return <Image src={image.src} height={image.height} width={image.width} />
            });
        }

        return (
            <div style={{ "flex": "1", "width": "20%", }}>
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
            console.log(screen);
            columns[i % screen].push(images[i]);
        }
        return columns.map(data => {
            return <Column images={data} />
        });
    }

    const determineNumOfCol = () => {
        if (window.innerWidth > 1200) {
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
            {render()}
        </div>
    )
}

export default Gallery;