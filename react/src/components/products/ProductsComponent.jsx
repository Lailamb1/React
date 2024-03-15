import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../asyncMock';
import { useEffect, useState } from 'react';
import "./ProductsComponent.css";


export default function ProductsComponent() {
const navigate = useNavigate();

const [products, setProducts] = useState([]);

useEffect(() => {
    getProducts.then((data) => setProducts(data));
    console.log('Recibiendo datos!!!');
}, []);

const handleClick = (id) => {
    navigate(`/product/${id}`);
};

return (
    <>
    <div className="contenedor-cursos">
        <h1>Products Component</h1>
        <section className="cursos">
        {products.map((product) => (
            <article
            key={product.id}
            className="curso"
            >
            <h4>{product.title}</h4>
            <img className="articulo-imagen" src={product.image} alt={product.title} />
            <p>Price {product.price}</p>
            <button className="ver-detalles" onClick={() => handleClick(product.id)}>
                Ver detalles
            </button>
            </article>
        ))}
        </section>
    </div>
    </>
);
}