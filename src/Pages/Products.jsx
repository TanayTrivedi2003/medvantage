import React, { useState } from "react";
import ProductSearchFilter from '../components/ProductSearchFilter'
import ProductsGrid from "../components/ProductsGrid";
import ProductsSlider from "../components/ProductsSlider";
const Products = () => {


    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    return (
        <>
            <ProductsSlider />

            <ProductSearchFilter
                onSearch={setSearch}
                onCategoryChange={setCategory}
            />

            <ProductsGrid
                searchQuery={search}
                selectedCategory={category}
            />



        </>
    )
}

export default Products