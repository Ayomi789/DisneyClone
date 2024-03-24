
import Taylor from "../assets/TaylorSwift.png"
import swift from "../assets/Swift.png"
import './Body.css'



function Body() {

    return (

        <>
            
                <div className="bdy">
                    <img src={Taylor} alt="" />
                    <img src={swift} alt="swift" className="swift" />
                </div>
            <div className="text1">
                <div className="text">
                    <h5>Includes "cardigan" and four additional acoustic songs.</h5>
                    <h5>Now streaming on Disney+</h5>
                    <button id="bottone1"><strong>Subscribe Now*</strong></button>
                </div>
            </div> 
        </>
    )
}


export default Body;