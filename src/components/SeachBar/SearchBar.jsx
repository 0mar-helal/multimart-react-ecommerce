import { useState } from "react";
import "./searchbar.css";
import { products } from "../../utils/products";
const SearchBar = ({setFilterList}) => {
    const [inputValue,setInputValue] =useState(null);
    const handelChange =(input)=> {
        setInputValue(input.target.value);
        setFilterList(products.filter(item => item.productName?.toLowerCase().includes(inputValue?.toLowerCase())));
    }
    return (
    <div className="search-container">
        <input
        type="text"
        placeholder="Search..."
        // value={value}
        onChange={handelChange}
        />
        <ion-icon name="search-outline" className="search-icon"></ion-icon>
    </div>
    );
};

export default SearchBar;