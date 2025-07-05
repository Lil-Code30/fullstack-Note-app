import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
// import AddNote from "./components/AddNote";
// import NoteCard from "./components/NoteCard";
// import Loading from "./components/Loading";

function App() {
  // const notesEl = notes.map((note) => {
  //   return <NoteCard key={note.id} note={note} />;
  // });
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* Page 404 */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>

      {/* <main className="px-3">
        <AddNote />
        <section className="my-5 px-2">
          <h1 className="text-4xl font-bold">All Notes </h1>
          <div className="my-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {notes.length === 0 ? <Loading /> : notesEl}
          </div>
        </section>
      </main> */}
    </>
  );
}

export default App;
