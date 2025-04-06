import React, { useContext } from "react";
import "./Category.css";
import { StoreContextApp } from "../Store/StoreContext";
import { Link } from "react-router-dom";

const Category = () => {
  let { categoryData } = useContext(StoreContextApp);

  return (
    <div className="category-container">
      <div className="category-list">
        {categoryData.map((category, index) => {
          if (category.enabled) {
            return (
              <div
                key={category.id}
                className={`category-card ${index % 2 === 0 ? "even" : "odd"}`}
              >
                <div
                  className={`category-image-container ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                >
                  <img
                    src={`/images/${category.imageUrl}`}
                    alt={category.name}
                    className="category-image"
                  />
                </div>
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <Link to={`/products/category/${category.id}`}>
                    <button className="category-order" key={category.id}>
                      {category.key}
                    </button>
                  </Link>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Category;
