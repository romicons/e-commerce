import { collection, getDocs, doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../firebase";

import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productsArray, setProductsArray] = useState([]);
  const [productsCounter, setProductsCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
      const getAllProducts = async () => {
        const collectionReference = collection(db, "products");
        const dataArray = await getDocs(collectionReference);

        const newProductsArray = dataArray.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });

        setProductsArray(newProductsArray);
        setProductsCounter(newProductsArray.length);
        setIsLoading(false);
      };

      getAllProducts();
    }, []);

  const updateProductStock = async (productId, quantity) => {
    const productRef = doc(db, "products", productId);

    try {
        const product = productsArray.find(p => p.id === productId);
        if (product.stock < quantity) {
            throw new Error("No hay suficiente stock para completar la compra");
        }

        await updateDoc(productRef, {
            stock: increment(-quantity) 
        });

        setProductsArray((prevProducts) =>
            prevProducts.map((product) =>
                product.id === productId
                    ? { ...product, stock: product.stock - quantity }
                    : product
            )
        );

    } catch (error) {
        console.error("Error actualizando el stock:", error);
    }
  };


  return (
    <ProductsContext.Provider
      value={{
        productsArray,
        setProductsArray,
        productsCounter,
        isLoading,
        updateProductStock,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
