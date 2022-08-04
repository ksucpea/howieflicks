import SectionHeader from "../Components/SectionHeader";
import SectionName from "../Components/SectionName";

const Home = () => {

    return (
        <>
            <SectionHeader />
            <div className="section">
                <div className="section-container">
                    <SectionName name="about me" />
                    <div style={{ "display": "flex" }}>
                        <img style={{ "width": "500px", "height": "auto" }} src="https://res.cloudinary.com/dwedmxczj/image/upload/c_scale,w_500/v1659556097/photos/DSC_0045_Original_ihfj0q.jpg"></img>
                        <p style={{"width": "40%", "margin": "0 5vw 0"}}>hello my name is Howard Kim, im 18 years old and i want to pursue my love for photography and go to the next level</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;