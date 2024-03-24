import Marvel from '../assets/image0-2022-06-14T092638.174.webp'
import iwaju from '../assets/OIF.jpg'
import Percy from '../assets/Percy-Jackson.png'
import './Movies.css'

function Movies() {

  const Movies = [
    {
      image: Marvel,
      name: "The Marvel",
      id: 1,

    },

    {
      image: iwaju,
      name: "Iwaju",
      id: 2,

    },

    {
      image: Percy,
      name: "Percy Jackson",
      desc: "Drama,Thriller, (Movie 2023)",
      id: 3,
    },
  ]




  return (
    <>
      <div className='movie2'>
        <h1 className='what'>Whats's On Disney+</h1>
        <div className='movie'>
          {Movies.map((categories) => (
            <div className="card">
              <img src={categories.image} className='card2' />
              <h1>{categories.name}</h1>
            </div>
          ))}
        </div>
        <div className='btn'>
          <button id='bottone'>SUBSCRIBE NOW*</button>
        </div>
      </div>


    </>
  )
}


export default Movies