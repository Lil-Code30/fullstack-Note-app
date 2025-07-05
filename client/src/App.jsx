import { useNotes } from "./contexts/NotesContexts";

import Navbar from "./components/Navbar";
import AddNote from "./components/AddNote";
import NoteCard from "./components/NoteCard";
import Loading from "./components/Loading";

function App() {
  const { notes } = useNotes();

  const notesEl = notes.map((note) => {
    return <NoteCard key={note.id} note={note} />;
  });
  return (
    <>
      <header className="w-full">
        <Navbar />
      </header>
      <main className="px-3">
        <AddNote />
        <section className="my-5 px-2">
          <h1 className="text-4xl font-bold">All Notes </h1>
          <div className="my-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {notes.length === 0 ? <Loading /> : notesEl}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
