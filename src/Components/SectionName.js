
const SectionName = ({ name }) => {
    return (
        <div style={{ "height": "20vh", "display": "flex", "alignItems": "center" }}>
            <h1 style={{ "fontSize": "16px" }}>{`# ${name}`}</h1>
        </div>
    )
}

export default SectionName;