import React from 'react';


const CartWidget = () => {
  return (
    <div className="d-flex">
      <i className="bi bi-cart"></i>
      <span className="badge bg-secondary ms-1">3</span>
    </div>
  );
};

export default CartWidget;