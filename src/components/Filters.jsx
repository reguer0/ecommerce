import "./styles/Filters.css";
import { useState } from "react";
import useFilters from "../hooks/useFilters.js";
export default function Filters() {

      const { filters, setFilters } = useFilters()

    const handelChangePrice = (event) => {
       
        setFilters((prev) => ({
            ...prev,
            minPrice: event.target.value,
        }));
    }

    const handleChangeCategory = (event) => {
        setFilters((prev) => ({
            ...prev,
            category: event.target.value,
        }));
    }
    return(
        <section className='filters'>   
            <div>
                <label htmlFor="price">Price</label>
                <input type="range" id="price" min='0' max='1000' onChange={handelChangePrice}/>
            </div>
            <span>${filters.minPrice}</span>
            <div>
                <label htmlFor="category">Category</label>
                <select name="category" id="category" onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="laptops">Protatiles</option>
                    <option value="smartphones">Moviles</option>
                    <option value="fragrances">Perfumes</option>
                </select>
            </div>
        </section>
        
    )
}