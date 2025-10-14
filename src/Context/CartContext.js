import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    await AsyncStorage.getItem("cart").then((cartItems) => {
      cartItems = JSON.parse(cartItems);
      setCartItems(cartItems);
    });
  };

  const addToCartItem = async (item) => {
    let cartItems = await AsyncStorage.getItem("cart");
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    let isExist = cartItems.findIndex((cart) => cart.id === item.id);

    //ถ้ายังไม่มี
    if (isExist === -1) {
      cartItems.push(item);
      //  calculateTotalPrice(cartItems);
      setCartItems(cartItems);
      await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  const value = {
    cartItems,
    addToCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};