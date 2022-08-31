import React from 'react';
import './card.css';
import Products from './Productos';


const Card = ({card, addProducts}) => {
    return ( 
        <div className="card">
        card

                {
                    card.length === 0
                    ? <h1> there'rent products</h1>

                    : card.map(p => <Products 
                    key = {p.id}
                    products = {p}
                    card = {card}
                    addProducts = {addProducts}
                    />)
                }
        </div>
     );
}
 
export default Card;