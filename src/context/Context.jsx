/* eslint-disable react/prop-types */
import { faker } from "@faker-js/faker";
import { createContext, useContext, useReducer } from "react";
import { CartReducer, ProductReducer } from "./Reducer";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const productsData = [...Array(30)].map(() => {
    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.urlPicsumPhotos(),
      inStock: faker.datatype.boolean({ probability: 0.7 }),
      fastDelivery: faker.datatype.boolean(),
      rating: faker.number.int({ max: 5 }),
    };
  });

  const [state, dispatch] = useReducer(CartReducer, {
    products: productsData,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(ProductReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
