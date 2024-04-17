import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-title">Bienvenido a nuestro Pet Shop</h1>
                <p className="home-description">Encuentra los mejores producots para tu mascota aquí.</p>
                <Link to="/products" className="btn home-btn">Ver productos</Link>
            </div>
        </div>
    );
};

export default Home;