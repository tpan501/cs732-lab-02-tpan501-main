import React, { createContext, useState } from 'react';
import { useEffect } from 'react';



// Create a new context
export const AppContext = createContext();


// Create the AppContextProvider component
export const AppContextProvider = ({ children }) => {
    // Define your state variables here
    const initialCart = JSON.parse(window.localStorage.getItem("cart")) || [];
    //这句话的意思是，如果localStorage里面有cart这个key，就把它parse出来，如果没有就返回一个空数组
    const [cart, setCart] = useState(initialCart);

    useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    //上面代码的意思是，每次cart变化的时候，都会把cart的值存到localStorage里面
    const products = [
        { name: "Abra", cost: 180, image: "/images/Abra.png" },
        { name: "Clefairy", cost: 500, image: "/images/Clefairy.png" },
        { name: "Nidorina", cost: 1200, image: "/images/Nidorina.png" },
        { name: "Dratini", cost: 2800, image: "/images/Dratini.png" },
        { name: "Scyther", cost: 5500, image: "/images/Scyther.png" },
        { name: "Porygon", cost: 9999, image: "/images/Porygon.png" }
    ];

    // const [cart, setCart] = useState([]);

    function handleAddToCart(item) {
        setCart([...cart, item]);
      }

    function clearCart() {
        setCart([]);
    }
    
    const context = {
    products, cart, handleAddToCart, clearCart
    }


    // Provide the state and functions to the children components
    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    );
};



