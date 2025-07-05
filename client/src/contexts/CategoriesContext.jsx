import { createContext, useContext, useEffect, useState } from "react";

import { fetchCategories } from "../api";

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setGategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const data = await fetchCategories();
        setGategories(data);
      } catch (error) {
        console.error("Erreur lors du fetch des categories :", error);
        setGategories([]);
      } finally {
        setIsLoading(false);
      }
    };
    getAllCategories();
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories, isLoading }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => useContext(CategoriesContext);
