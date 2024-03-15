import React from "react";
import { AppContextProvider } from "./AppContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContextProvider";
import { ShoppingCartItem } from "./ShoppingCart";
/**
 * 
 * A list of products in the user's shopping cart should be displayed. 
 * The data should come from your existing centralized state which you achieved in Exercise five.
    There should be a "Purchase" button which, when clicked, will clear the user's shopping cart and display a message stating 
    something like "Thank you for your purchase!". This can either be some kind of dialog box, or a new page (or subpage, 
    taking further advantage of React Router's ability to have nested Routes).
 */

export default function CheckoutPage() {
    const { cart, clearCart } = useContext(AppContext);
    const navigate = useNavigate();
    const navigateToPurchase = () => {
        if (cart.length === 0) {
            // 如果购物车为空，则提示用户，并阻止进一步操作
            alert("没有货物在购物车里");
        } else {
            clearCart(); // 清空购物车
            navigate("/purchase"); // 导航到感谢页面
        }
    }

    const navigateToShop = () => {
        navigate("/shop");
    }

    const groups = groupItems(cart);

    return (
        <div className = "checkout">
            <div className="shoppingCart">
            
                <ShoppingCart/>
            
            </div>
            <button onClick={navigateToPurchase}>Purchase</button>
            <button onClick={navigateToShop}>Back to Shop</button>
       </div>
    );
}

function groupItems(cart) {
    const groupedItems = [];
    cart.forEach((item) => {
      const group = groupedItems.find((g) => g.item.name === item.name);
      if (group) {
        group.count++;
      } else {
        groupedItems.push({ item, count: 1 });
      }
    });
    return groupedItems;
  }