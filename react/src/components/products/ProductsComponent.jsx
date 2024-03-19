import { getProducts } from '../../asyncMock';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./ProductsComponent.css";



export default function ProductsComponent() {

const [products, setProducts] = useState([]);

useEffect(() => {
    getProducts.then((data) => setProducts(data));
    console.log('Recibiendo datos!!!');
}, []);


return (
    <>
    <div className="contenedor-cursos">
        <h1>Productos</h1>
        <section className="cursos">
        {products.map((products) => (
            <article
            key={products.id}
            className="curso"
            >
            <h4>{products.title}</h4>
            <img className="articulo-imagen" src={products.image} alt={products.title} />
            <p>Price {products.price}</p>
            <Link to={`/product/${products.id}`} className="ver-detalles">
                Ver detalles
            </Link>
            </article>
        ))}
        </section>
    </div>
    </>
);
}
