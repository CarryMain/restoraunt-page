import './home.scss';
import img from '../../resources/image/main-image.jpg'

const Home = () => {
    return ( 
        <main className='home'>
                <img className='home__image' src={img} alt="main-coffee" />
        </main>
    )
}


export default Home 