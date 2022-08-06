import SectionHeader from "../Components/SectionHeader";
import SectionName from "../Components/SectionName";

const Home = () => {

    return (
        <>
            <SectionHeader />
            <div className="section">
                <div className="section-container">
                    <SectionName name="about me" />
                    <div style={{ "display": "flex", "flexWrap": "wrap" }}>
                        <img style={{ "margin": "5vw 5vw 0 0", "width": "min(100%, 500px)", "height": "auto", "marginBottom": "5vw" }} src="https://res.cloudinary.com/dwedmxczj/image/upload/c_scale,w_500/v1659556097/photos/DSC_0045_Original_ihfj0q.jpg"></img>
                        <p style={{ "margin": "5vw 5vw 0 0", "flex": "250px", "maxWidth": "500px"}}>hello my name is Howard Kim, im 18 years old and i want to pursue my love for photography and go to the next level</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;