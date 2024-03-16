import { useParams } from 'react-router-dom';
import { getProduct } from '../asyncMock';

const ProductDetail = () => {
const { id } = useParams();

const product = getProduct(id); // Usa el ID para obtener los detalles del producto

return (
    <div>
    <h1>Single Prod {product.id}</h1>
    <h3>Nombre: {product.title}</h3>
    <img src={product.image} alt={product.title} />
    <p>{product.description}</p>
    <p>{product.category}</p>
    <p>Precio $ {product.price}</p>
</div>
    );
};

export default ProductDetail;

