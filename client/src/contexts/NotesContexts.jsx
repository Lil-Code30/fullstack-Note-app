import { createContext, useContext, useEffect, useState } from "react";

import { fetchAllNotes } from "../api";

const notesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getAllNotes = async () => {
      const { notes } = await fetchAllNotes();
      setNotes(notes);
    };
    getAllNotes();
  }, [notes]);
  return (
    <notesContext.Provider value={{ notes }}>{children}</notesContext.Provider>
  );
};

export const useNotes = () => useContext(notesContext);
