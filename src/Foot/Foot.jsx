import Twitter from '../assets/bxl-twitter.svg'
import Facebook from '../assets/bxl-facebook.svg'
import Instagram from '../assets/bxl-instagram.svg'
import Youtube from '../assets/bxl-youtube.svg'
import disss from '../assets/disney_logo_dark@2x-45d70f7dd57b (1).png'
import './Foot.css'

function Foot() {

    return (
        <>
            <div className='twee'> <h3>Follow Disney On:</h3>
                <img src={Twitter} alt="" />
                <img src={Facebook} alt="" />
                <img src={Instagram} alt="" />
                <img src={Youtube} alt="" />
            </div>

            <div className='diss'>
                <img src={disss} alt="" />
            </div>
        </>
    )
}

export default Foot