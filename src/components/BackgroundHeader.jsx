import "./StyleSheet.css"
import bgImage from "../assets/bgImage.jpg"
function BackgroundHeader(){
    return (
        <>
            <img className="bgHeader" src={bgImage} alt="" />
            <div class="border-bottom">.</div>
            <div className="grabPage container-sm"></div>
        </>
    )
}

export default BackgroundHeader;