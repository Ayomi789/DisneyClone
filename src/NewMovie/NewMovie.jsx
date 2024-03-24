import StarWars from '../assets/image_33685209.jpeg'
import Insideout from '../assets/image_ae8841cf.jpeg'
import Soul from '../assets/image_e77e732c.jpeg'
import './NewMovie.css'


function NewMovie() {

    const items = [
        {
            name: "Star Wars:The Phantom Menace",
            image: StarWars
        },

        {
            name: "Inside Out",
            image: Insideout
        },

        {
            name: "Soul",
            image: Soul,
        }
    ]


    return (
        <>

            <div className='Bggg'>
                <div>
                    <h1 style={{ textAlign: 'center' }}>Movies</h1>
                </div>
                <div className='card4'>
                    {items.map((item) => (
                        <div className='card3'>
                            <img src={item.image} alt="" />
                            <h2>{item.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NewMovie;