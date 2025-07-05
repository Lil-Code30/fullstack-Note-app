import { createContext, useContext, useEffect, useState } from "react";

import { fetchNotes } from "../api";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const data = await fetchNotes();
        setNotes(data);
      } catch (error) {
        console.error("Erreur lors du fetch des notes :", error);
        setNotes([]);
      } finally {
        setIsLoading(false);
      }
    };

    getNotes();
  }, []);

  return (
    <NotesContext.Provider value={{ notes, isLoading }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
