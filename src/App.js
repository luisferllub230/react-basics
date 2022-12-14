import React, {Fragment, useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Productos";
import Card from "./components/Card";

function App() {

  //create a list of products
  const [productos, setSaveProducts] = useState([
    {id:1, name:"carlitos"},
    {id:2, name:"carlitos2"},
    {id:3, name:"carlitos3"},
    {id:4, name:"carlitos5"},
  ]);

  //card state
  const [card, addProducts] = useState([]);

  //get year
  const year = new Date().getFullYear()

  return (
    <Fragment>

      <Header 
        title="from the Header component xd dynamic"
      />

      <h1>States</h1>
      {productos.map(p => (
        <Products 
          key={p.id}
          products={p}
          productos = {productos}
          card = {card}
          addProducts = {addProducts}
        />
      ))}

      <Card 
        card={card}
        addProducts = {addProducts}
      />

      <Footer 
        year={year}
      />

    </Fragment>
  );
}

export default App;
