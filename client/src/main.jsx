import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NotesProvider } from "./contexts/NotesContexts.jsx";
import { CategoriesProvider } from "./contexts/CategoriesContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CategoriesProvider>
      <NotesProvider>
        <App />
      </NotesProvider>
    </CategoriesProvider>
  </StrictMode>
);
