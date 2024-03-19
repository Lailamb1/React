import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default function NavBar() {
return (
        <>
            <div style={{ marginBottom: 30, display: 'flex', justifyContent: 'center', gap: 10, backgroundColor: '#f8f9fa', padding: '10px 20px', borderRadius: 5 }}>
                {/*<button style={{ border: 'none', background: 'none', fontSize: 30, fontWeight: 'bold' }}>
                    <Link to={'/'} style={{ textDecoration: 'none', color: '#212529' }}>Home</Link>
                </button>*/}
                <button style={{ border: 'none', background: 'none', fontSize: 30, fontWeight: 'bold' }}>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: '#212529' }}>Products</Link>
                </button>
                {/*<button style={{ border: 'none', background: 'none', fontSize: 30, fontWeight: 'bold' }}>
                    <Link to={'/contact'} style={{ textDecoration: 'none', color: '#212529' }}>Contact</Link>
                </button>*/}
                <Link to={'/cart'} style={{ textDecoration: 'none', color: '#212529', display: 'flex', alignItems: 'center' }}>
                    <FaShoppingCart size={30} style={{ marginRight: 5 }} />
                </Link>
            </div>
        </>
    );
}