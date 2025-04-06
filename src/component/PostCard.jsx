import React, { useContext } from "react";
import "./PostCard.css";
import { StoreContextApp } from "../Store/StoreContext";

const PostCard = ({ products }) => {
  const { addToCart } = useContext(StoreContextApp);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="card">
      {products.map((productItems) => (
        <div key={productItems.id}>
          <img
            src={`/images/${productItems.imageURL}`}
            alt={productItems.name}
          />
          <h3>{productItems.name}</h3>
          <p>{productItems.description}</p>
          <div className="price" onClick={() => handleAddToCart(productItems)}>
            Add to Cart &nbsp;&nbsp;&#8377;{productItems.price}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
