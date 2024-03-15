import { useState } from "react";
import Product from "./Product";
import styles from "./ShopPage.module.css";
import ShoppingCart from "./ShoppingCart";
import React, { useContext } from 'react';
import { AppContext } from "./AppContextProvider";
import { Link } from "react-router-dom";


// const products = [
//   { name: "Abra", cost: 180, image: "/images/Abra.png" },
//   { name: "Clefairy", cost: 500, image: "/images/Clefairy.png" },
//   { name: "Nidorina", cost: 1200, image: "/images/Nidorina.png" },
//   { name: "Dratini", cost: 2800, image: "/images/Dratini.png" },
//   { name: "Scyther", cost: 5500, image: "/images/Scyther.png" },
//   { name: "Porygon", cost: 9999, image: "/images/Porygon.png" }
// ];

export default function ShopPage() {
  // Hold the user's shopping cart as state
  // const [cart, setCart] = useState([]);

  // function handleAddToCart(item) {
  //   setCart([...cart, item]);
  // }
  const { products, handleAddToCart } = useContext(AppContext);

  return (
    <>
    <div className={styles.header}>
      <h1>🚀Rocket Game Corner 🚀 - Prize Shop</h1>
      <Link to="/checkout">Checkout</Link>
    </div>
      <div className={styles.mainGrid}>
        <div className={styles.productContainer}>
          {products.map((product, index) => (
            <Product key={index} item={product} />
          ))}
        </div>
        <div>
          {/* <ShoppingCart items={cart} /> */}
          <ShoppingCart />
        </div>
      </div>
    </>
  );
}
