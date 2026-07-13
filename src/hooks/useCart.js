import { useCallback, useState } from "react";
//import apiClient from "../services/api-client";
import authApiClient from "../Services/auth-api-client";

const useCart = () => {
  // const [authToken, setAuthToken] = useState(
  //   () => JSON.parse(localStorage.getItem("authTokens") || "null").access
  // );

  const [authToken] = useState(() => {
    const tokens = JSON.parse(localStorage.getItem("authTokens") || "null");
    return tokens?.access ?? null;
  });
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));

  // Crate a new cart
  const createOrGetCart = useCallback(async () => {
    try {
      console.log(authToken);
      const response = await authApiClient.post("/carts/");
      if(!cartId){
        localStorage.setItem("cartId",response.data.id);
        setCartId(response.data.id);
      }
      setCart(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [authToken, cartId]);

  //Add items to the cart
  const AddCartItems = useCallback(async (product_id, quantity) => {
    if(!cartId) await createOrGetCart();
    try{
      const response = await authApiClient.post( `/carts/${cartId}/items/`, {product_id, quantity});
      return response.data;
    } catch(error){
      console.log("Error on Adding items to cart", error);
    }
  }, [cartId, createOrGetCart]);

  return { cart, createOrGetCart, AddCartItems };
};

export default useCart;