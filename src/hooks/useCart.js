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
  const [loading, setLoading] = useState(false);

  // Crate a new cart
  const createOrGetCart = useCallback(async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  }, [authToken, cartId]);

  //Add items to the cart
  const AddCartItems = useCallback(async (product_id, quantity) => {
    setLoading(true);
    if(!cartId) await createOrGetCart();
    try{
      const response = await authApiClient.post( `/carts/${cartId}/items/`, {product_id, quantity});
      return response.data;
    } catch(error){
      console.log("Error on Adding items to cart", error);
    } finally {
      setLoading(false);
    }
  }, [cartId, createOrGetCart]);

  // Update Item quantity
  const updateCartItemQuantity = useCallback(
    async (itemId, quantity) => {
      try {
        await authApiClient.patch(`/carts/${cartId}/items/${itemId}/`, {
          quantity,
        });
      } catch (error) {
        console.log("Error updating cart items", error);
      }
    },
    [cartId]
  );

  return { cart, loading, createOrGetCart, AddCartItems, updateCartItemQuantity };
};

export default useCart;