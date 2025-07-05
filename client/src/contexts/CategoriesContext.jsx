import { createContext, useContext, useEffect, useState } from "react";

import { fetchAllNotes } from "../api";

const categoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setGategories] = useState([]);

  useEffect(() => {
    const getAllCategories = async () => {
      const { categories } = await fetchAllNotes();
      setGategories(categories);
    };
    getAllCategories();
  }, []);
  return (
    <categoriesContext.Provider value={{ categories }}>
      {children}
    </categoriesContext.Provider>
  );
};

export const useCategories = () => useContext(categoriesContext);
