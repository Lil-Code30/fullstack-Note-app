import { useNotes } from "../contexts/NotesContext";
import NoteCard from "../components/NoteCard";
import AddNote from "../components/AddNote";
import NoteCardSkeleton from "../components/NoteCardSkeleton";

const Home = () => {
  const { notes, isLoading } = useNotes();

  if (!notes?.length)
    return (
      <>
        <h1 className="text-4xl font-bold">Notes</h1>
        <div className="my-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(12)].map((_, idx) => (
            <NoteCardSkeleton key={idx} />
          ))}
        </div>
      </>
    );

  return (
    <main className="px-3">
      <AddNote />
      <section className="my-5 px-2">
        <h1 className="text-4xl font-bold">Notes</h1>
        <div className="my-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading &&
            [...Array(12)].map((_, idx) => <NoteCardSkeleton key={idx} />)}

          {!isLoading &&
            notes.length > 0 &&
            notes.map((note) => <NoteCard key={note.id} note={note} />)}

          {!isLoading && notes.length === 0 && (
            <p className="text-gray-500 col-span-full">Aucune note trouvée.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
