import { createContext, useState } from "react";
// add useEffect
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

// import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  // ! DELETE console.log
  console.log(setProducts);
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);
  const value = {products};
  return (
    <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
  );
};
