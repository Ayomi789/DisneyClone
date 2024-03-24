import Back from '../assets/Flowing-Light-Blue-Abstract-Background.jpg'
import './Footer.css'

function Footer() {

    return (
        <>
            <div className='Bgg' style={{ paddingTop: '40px' }}>

                <div>
                    <h1 style={{ textAlign: 'center' }}>More From Disney</h1>
                </div>

                <div className='last'>
                    <img src={Back} alt="" style={{ width: '100%', height: '480px' }} />

                    <div className='last1'><h1>Sign up to hear <br />about Disney news <br />and more</h1>
                    <a href="https://www.disney.co.uk/sign-up">  <button id="bottone1" style={{ backgroundColor: 'white', color: 'black', borderRadius: '10px', gap: '40px' }}>JOIN THE FAMILY</button></a>
                    </div>
                 
                </div>
            </div>
        </>
    )
}

export default Footer