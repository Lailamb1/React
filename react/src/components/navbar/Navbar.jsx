import { Link } from 'react-router-dom';

export default function NavBar() {
return (
        <>
            <div style={{ marginBottom: 30, display: 'flex', justifyContent: 'center', gap: 10, backgroundColor: '#f8f9fa', padding: '10px 20px', borderRadius: 5 }}>
                <button style={{ border: 'none', background: 'none', fontSize: 30, fontWeight: 'bold' }}>
                    <Link to={'/'} style={{ textDecoration: 'none', color: '#212529' }}>Home</Link>
                </button>
                <button style={{ border: 'none', background: 'none', fontSize: 30, fontWeight: 'bold' }}>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: '#212529' }}>Products</Link>
                </button>
                <button style={{ border: 'none', background: 'none', fontSize: 30, fontWeight: 'bold' }}>
                    <Link to={'/contact'} style={{ textDecoration: 'none', color: '#212529' }}>Contact</Link>
                </button>
            </div>
        </>
    );
}