import { useState } from 'react'
import Header from "./components/Header.jsx";
import {Products} from "./components/Products.jsx";
import {products} from "./mocks/products.json";
import useFilters from './hooks/useFilters.js';
import './App.css'

function App() { 
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products)
  return (   
    <>
     <Header  />
    <Products products={filteredProducts}/>
    </>
  )
}

export default App
