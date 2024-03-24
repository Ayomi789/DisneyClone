import Frozen from '../assets/Frozen.png'
import Lion from '../assets/lionhead.png'
import './Shop.css'





function Shops() {

    return (

        <>
            <div className='Bgg'>
                <div className="Shops">
                    <h1>Shop</h1>
                    <h2>Parks</h2>
                    <h2>Shows</h2>
                </div>

                <div className='leo'>
                    <div className='lion'>
                        <img src={Lion} alt="" />
                    </div>
                    <div className='lion'>
                        <img src={Frozen} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shops;