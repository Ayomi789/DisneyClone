import './Header.css'
import Disney from '../assets/OIP.jpg'





function Header() {

    return (
        <>
            <div>
                <ul>
                    <img src={Disney} alt="Disney" className='Dis' />
                    <li><a href="">Disney+</a></li>
                    <li><a href="">SHOPS</a></li>
                    <li><a href="">MOVIES</a></li>
                    <li><a href="">SHOWS</a></li>
                    <li><a href="">PARKS</a></li>
                </ul>
            </div>
        </>
    )
}


export default Header;