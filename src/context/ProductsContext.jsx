import { collection, getDocs } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";
import { db } from "../../firebase";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productsArray, setProductsArray] = useState([]);
  const [productsCounter, setProductsCounter] = useState(0); // Inicializa como número
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllProducts = async () => {
      const collectionReference = collection(db, "products");
      const dataArray = await getDocs(collectionReference);

      const newProductsArray = dataArray.docs.map((product) => {
        return { id: product.id, ...product.data() };
      });

      console.log(newProductsArray)
      setProductsArray(newProductsArray); 
      setProductsCounter(newProductsArray.length); 
      setIsLoading(false); 
    };

    getAllProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        productsArray,
        setProductsArray,
        productsCounter,
        isLoading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
