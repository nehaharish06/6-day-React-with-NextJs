import React, { createContext, useState, useContext } from "react";

const EcomContext = createContext();

export function useEcomContext() {
    return useContext(EcomContext);
}

export function EcomContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addProductToCart(product) {
        setCart((prevCart) => [...prevCart, product]);
    }

    function removeProductFromCart(productId) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }

    return (
        <EcomContext.Provider value={{ cart, addProductToCart, removeProductFromCart }}>
            {children}
        </EcomContext.Provider>
    );
}
