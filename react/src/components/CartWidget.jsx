
const CartWidget = () => {
    const cartItemsCount = 5;

    return (
    <div className="nav-item">
        <a className="nav-link" href="#">
        <i className="bi bi-cart"></i>
        <span className="badge bg-primary">{cartItemsCount}</span>
        </a>
    </div>
    );
}

export default CartWidget;