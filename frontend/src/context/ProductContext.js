import { createContext, useState, useContext, useEffect } from "react";
import { useUserContext } from "./UserContext";
import axios from "axios";

export const ProductContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const {currentUser, userContextLoading} = useUserContext();
  console.log(currentUser);
  const [productContextLoading, setProductContextLoading] = useState(true);
  console.log(userContextLoading);

  useEffect(() => {
    if (!userContextLoading) {
      const fetchProducts = async () => {
        try {
          const response = await axios.get("https://smoothie-blog.onrender.com/recipes", {
            headers: {
              Authorization: `Bearer ${currentUser.token}`,
            },
          });
          const data = await response.data;
          console.log(data);
          setProducts(data);
          setProductContextLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      if (currentUser) {
        fetchProducts();
      }

      return () => fetchProducts();
    } else {
      setProducts([]);
    }
  }, [currentUser, userContextLoading]);

  const CREATE_PRODUCT = async (product) => {
    setProducts([...products, product]);
  };

  const UPDATE_PRODUCT = async (updatedProduct) => {
    const updatedProducts = products.map((product) => {
      if (product._id === updatedProduct._id) {
        return updatedProduct;
      } else {
        return product;
      }
    });
    setProducts(updatedProducts);
  };

  const DELETE_PRODUCT = async (id) => {
    const updatedProducts = products.filter((product) => product._id !== id);
    setProducts(updatedProducts);
  };

  return (
    <ProductContext.Provider
      value={{
        CREATE_PRODUCT,
        UPDATE_PRODUCT,
        DELETE_PRODUCT,
        setProducts,
        products,
        productContextLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  return context;
};
