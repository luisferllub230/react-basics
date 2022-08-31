import React from 'react'

//sfc
const Products = ({products}, {key}) => {
    return (
        <div>
            <h3>{products.id}</h3>
            <h4>{products.name}</h4>
        </div>
    );
}

export default Products;

