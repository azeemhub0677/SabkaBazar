import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { StoreContextApp } from "../Store/StoreContext";

const SideBar = () => {
  const { categoryData } = useContext(StoreContextApp);

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Categories</h2>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/products"> All </Link>
        </li>

        {categoryData.map((category) => (
          <li className="sidebar-item" key={category.id}>
            <Link to={`/products/category/${category.id}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
