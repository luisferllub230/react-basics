import React from 'react'

//sfc
const Products = ({ products, card, addProducts, productos }) => {

    const { name, id } = products

    //add
    const addFunction = (id) => {
        addProducts([
            ...card,
            productos.filter(p => p.id === id)[0]
        ])
    }


    //delete
    const deleteFunction = id => {
        addProducts(card.filter(p => p.id !== id))
    }

    return (
        <div>
            <h3>{id}</h3>
            <h4>{name}</h4>

            {
                productos

                    ?
                    <button
                        type="submit"
                        onClick={() => addFunction(id)}
                    >Add</button>

                    :
                    <button
                        type="submit"
                        onClick={() => deleteFunction(id)}
                    >delete</button>
            }
        </div>
    );
}

export default Products;

