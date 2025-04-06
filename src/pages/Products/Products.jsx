import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../component/NavBar";
import SideBar from "../../component/SideBar";
import PostCard from "../../component/PostCard";
import { StoreContextApp } from "../../Store/StoreContext";
import "./Products.css";

const Products = () => {
  const { categoryId } = useParams();
  const { ProductsData } = useContext(StoreContextApp);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      setFilteredProducts(
        ProductsData.filter((product) => product.category === categoryId)
      );
    } else {
      setFilteredProducts(ProductsData);
    }
  }, [categoryId, ProductsData]);

  return (
    <>
      <NavBar />
      <div className="Sidebar-Products-Container">
        <SideBar />
        <PostCard products={filteredProducts} />
      </div>
    </>
  );
};

export default Products;
