import express from "express";
import colors from "colors";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import categoriesRoutes from "./routes/categoriesRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();

const PORT = 8000;

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.use("/api/notes", notesRoutes);
app.use("/api/categories", categoriesRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
