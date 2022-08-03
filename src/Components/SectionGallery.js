import React, { useEffect, useRef, useState } from "react";
import img1 from "../photos/img1.jpg";
import img2 from "../photos/img2.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Gallery from "./Gallery";
import Links from "./Links";

const SectionGallery = () => {

    const location = useLocation();

    const backgrounds = {
        "/me": {
            name: "Diditupe man",
            background: "https://res.cloudinary.com/dwedmxczj/image/upload/v1659477856/friends/DSC_0317_szva8g.jpg",
            about: "big booty latina lover. father of 5. registered sex offender.",
            gallery: []
        },
        "/": {
            name: "the void",
            background: img1,
            about: null,
            gallery: [
                "https://cdn.mos.cms.futurecdn.net/cMDRA3454bGvfZASbxviZe.jpg",
                "https://preview.redd.it/xzzgdo19c0e91.jpg?width=640&crop=smart&auto=webp&s=60460a7da09370bd2f948d6bb693b67c256e4951",
                "http://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release.png",
                "https://i.redd.it/uxzsxw83g2f91.png",
                "https://preview.redd.it/tivrynvj5ze91.png?width=640&crop=smart&auto=webp&s=889c460275017964b08cecd46ddc4ef17aff8903",
                "https://preview.redd.it/6lawa15xjqd91.png?width=640&crop=smart&auto=webp&s=cd2195c2d6fef163f2c6fb636ca650ecc7b5de8e",
                "https://preview.redd.it/nxng69oda4d91.jpg?width=640&crop=smart&auto=webp&s=5b807e2c4698c4a250141755b2ceb9d141cfacbd",
                "https://preview.redd.it/929ksx974xc91.jpg?width=640&crop=smart&auto=webp&s=9b36fd32baf45312862f839148b975dfe9b980c0",
                "https://i.redd.it/abzls68vuuc91.jpg",
            ],
        },
        "/korea": { name: "korea", background: img2, gallery: [] },
        "/baltimore": {
            name: "baltimore",
            background: "https://res.cloudinary.com/dwedmxczj/image/upload/v1659382039/baltimore/DSC_0030_oyapk3.jpg",
            about: null,
            gallery: [
                "https://res.cloudinary.com/dwedmxczj/image/upload/v1659380790/baltimore/DSC_0001_kw8nwq.jpg",
            ]
        },
        "/friends": {
            name: "live, laugh, love",
            background: "https://res.cloudinary.com/dwedmxczj/image/upload/v1659401911/friends/285914904_705626490665660_1708616946904461603_n_rol77b.jpg",
            about: null,
            gallery: [
                "https://res.cloudinary.com/dwedmxczj/image/upload/v1659401869/friends/285334911_1165676550875860_9037418687720883010_n_erwkaq.jpg",
                "https://res.cloudinary.com/dwedmxczj/image/upload/v1659402063/friends/285376203_1129100277869911_8840696368636968824_n_mqf1xe.jpg",
            ]
        },
        "/607": {
            name: "H607",
            background: "https://res.cloudinary.com/dwedmxczj/image/upload/v1659401513/photos/DSC_0115_tf2zry.jpg",
            about: null,
            gallery: [
                { "src": "https://res.cloudinary.com/dwedmxczj/image/upload/v1659401139/photos/DSC_0182_p7wwea.jpg", "width": 1405, "height": 937 },
                { "src": "https://res.cloudinary.com/dwedmxczj/image/upload/v1659401190/photos/DSC_0095_xlgabp.jpg", "width": 587, "height": 880 },
                { "src": "https://res.cloudinary.com/dwedmxczj/image/upload/v1659401236/photos/DSC_0487_s5nvwu.jpg", "width": 1320, "height": 880 },
                { "src": "https://res.cloudinary.com/dwedmxczj/image/upload/v1659401282/photos/DSC_0406_v8uukj.jpg", "width": 1320, "height": 880 },
                { "src": "https://res.cloudinary.com/dwedmxczj/image/upload/v1659401306/photos/DSC_0402_mspqbn.jpg", "width": 1320, "height": 880 },
                { "src": "https://res.cloudinary.com/dwedmxczj/image/upload/v1659401385/photos/DSC_0477_h3bk2q.jpg", "width": 587, "height": 880 },
                { "src": "https://res.cloudinary.com/dwedmxczj/image/upload/v1659401570/photos/DSC_0278_vrwsgr.jpg", "width": 1405, "height": 937 },
                { "src": "https://res.cloudinary.com/dwedmxczj/image/upload/v1659401658/photos/DSC_0409_yvpsnu.jpg", "width": 1405, "height": 937 },
                { "src": "https://res.cloudinary.com/dwedmxczj/image/upload/v1659401986/friends/292015629_1206287770204736_4370634618261123517_n_uy2rom.jpg", "width": 1080, "height": 812 },
            ]
        }
    };

    const navigate = useNavigate();

    const [image, setImage] = useState(backgrounds[location.pathname].background);

    const [opac, setOpac] = useState(1);

    const ref = useRef();

    useEffect(() => {
        setImage(backgrounds[location.pathname].background);
        setOpac(.6);
        console.log("useEffect called");
    }, [location]);

    const toPage = (url) => {
        const img = new Image().src = backgrounds[url].background;
        setOpac(1);
        setTimeout(() => {
            navigate(url);
        }, 600);
    }

    return (
        <>
            <div style={{ "backgroundRepeat": "no-repeat", "width": "100%", "height": "100vh", "backgroundImage": `url(${image})`, "backgroundSize": "cover", "backgroundPosition": "center", "backgroundAttachment": "fixed" }}>
                <div ref={ref} style={{ "opacity": opac, "transition": ".6s opacity", "background": `rgb(0, 0, 0)`, "width": "100%", "height": "100%", }}>
                    <div style={{ "width": "80%", "height": "100vh", "display": "flex", "margin": "0 auto", }}>
                        <Links toPage={toPage} />
                    </div>
                </div>
                <div style={{ "background": "#fff", "width": "100%", "paddingBottom": "5vw" }}>
                    <div style={{ "width": "80%", "margin": "0 auto" }}>
                        <div style={{ "height": "20vh", "display": "flex", "alignItems": "center" }}>
                            <h1 style={{ "fontSize": "16px" }}># {backgrounds[location.pathname].name}</h1>
                        </div>
                        {backgrounds[location.pathname].about && <p>{backgrounds[location.pathname].about}</p>}
                        <Gallery images={backgrounds[location.pathname].gallery} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionGallery;